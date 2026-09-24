// POST /api/stripe/webhook — o Stripe avisa; a tabela entitlements libera ou revoga.
// Assinatura verificada com o corpo cru; idempotência por evt_… em webhook_events.
import { stripe, admin, json } from "../_lib.js";

const GRACE_DAYS = 3;   // assinatura: o direito vive até o fim do período + folga para o Stripe tentar de novo
const checked = async (query) => {
  const result = await query;
  if (result.error) throw result.error;
  return result.data;
};
const active = (s) => s === "active" || s === "trialing";
const iso = (unix) => (unix ? new Date(unix * 1000).toISOString() : null);
const plusDays = (unix, d) => new Date(unix * 1000 + d * 864e5).toISOString();

export async function POST(request) {
  const sig = request.headers.get("stripe-signature");
  const raw = await request.text();
  let event;
  try { event = stripe.webhooks.constructEvent(raw, sig, process.env.STRIPE_WEBHOOK_SECRET); }
  catch { return json({ error: "assinatura inválida" }, 400); }

  // já processado? (o Stripe reenvia em caso de timeout)
  try {
    const { error: dup } = await admin.from("webhook_events").insert({ id: event.id, type: event.type, payload: event });
    if (dup) {
      if (dup.code !== "23505") throw dup;
      const previous = await checked(admin.from("webhook_events").select("processed_at").eq("id", event.id).single());
      if (previous.processed_at) return json({ received: true, duplicate: true });
      // Received is not completed. Re-run the idempotent operations after a failure.
    }
    await handle(event);
    await checked(admin.from("webhook_events").update({ processed_at: new Date().toISOString(), error: null }).eq("id", event.id));
    return json({ received: true });
  } catch (e) {
    // Never persist provider payloads or database error details in diagnostic text.
    try { await admin.from("webhook_events").update({ error: "processing_failed" }).eq("id", event.id); } catch {}
    return json({ error: "falha ao processar; o Stripe vai reenviar" }, 500);
  }
}

async function handle(event) {
  const o = event.data.object;
  switch (event.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded": {
      if (o.mode !== "payment" || o.payment_status !== "paid") return;   // assinatura é tratada pelos eventos de subscription
      await grantPurchase(o); return;
    }
    case "checkout.session.async_payment_failed":
      return;   // boleto/PIX não pagos: nada a liberar
    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      // Delivery order is not guaranteed. The provider's current state wins.
      await syncSubscription(await stripe.subscriptions.retrieve(o.id)); return;
    case "invoice.paid": {
      const subId = typeof o.subscription === "string" ? o.subscription : o.subscription?.id || o.parent?.subscription_details?.subscription;
      if (subId) await syncSubscription(await stripe.subscriptions.retrieve(subId));
      return;
    }
    case "invoice.payment_failed":
      return;   // o Stripe tenta de novo (Smart Retries); a assinatura muda de status e cai no evento updated
    case "charge.refunded":
    case "charge.dispute.created": {
      const pi = typeof o.payment_intent === "string" ? o.payment_intent : o.payment_intent?.id;
      if (!pi) return;
      const status = event.type === "charge.refunded" ? "refunded" : "disputed";
      const p = await checked(admin.from("purchases").update({ status, refunded_at: new Date().toISOString() }).eq("stripe_payment_intent_id", pi).select("id, user_id, product_id").maybeSingle());
      if (!p) {
        const payment = await stripe.paymentIntents.retrieve(pi);
        if (payment.metadata?.user_id && payment.metadata?.product_id) throw new Error("purchase_not_ready");
        return; // A payment outside this store must not retry indefinitely.
      }
      await checked(admin.from("entitlements").update({ revoked_at: new Date().toISOString(), note: status }).eq("source", "purchase").eq("source_id", p.id));
      return;
    }
    default:
      return;
  }
}

async function userFor(session_or_sub) {
  const uid = session_or_sub.metadata?.user_id || session_or_sub.client_reference_id;
  if (uid) return uid;
  const cust = typeof session_or_sub.customer === "string" ? session_or_sub.customer : session_or_sub.customer?.id;
  const data = await checked(admin.from("stripe_customers").select("user_id").eq("stripe_customer_id", cust).maybeSingle());
  return data?.user_id || null;
}

async function grantPurchase(session) {
  const user_id = await userFor(session);
  const product_id = session.metadata?.product_id;
  // sessão sem nosso metadata (ex.: `stripe trigger`, ou criada no painel): não é uma compra da loja; registra e segue
  if (!user_id || !product_id) return;
  const pi = typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id;
  if (!pi) throw new Error("payment_intent_missing");
  const payment = await stripe.paymentIntents.retrieve(pi, { expand: ["latest_charge"] });
  const charge = payment.latest_charge;
  const revoked = charge && typeof charge === "object" && (charge.refunded || charge.amount_refunded > 0 || charge.disputed);
  const status = charge?.disputed ? "disputed" : revoked ? "refunded" : "paid";
  const { data: purchase, error } = await admin.from("purchases").upsert({
    user_id, product_id, price_id: session.metadata?.price_id || null,
    stripe_checkout_session_id: session.id, stripe_payment_intent_id: pi,
    amount: session.amount_total ?? 0, currency: session.currency || "brl", status,
  }, { onConflict: "stripe_checkout_session_id" }).select("id").single();
  if (error) throw error;
  if (revoked) {
    await checked(admin.from("entitlements").update({ revoked_at: new Date().toISOString(), note: status })
      .eq("source", "purchase").eq("source_id", purchase.id));
    return;
  }
  await checked(admin.from("entitlements").upsert({ user_id, product_id, source: "purchase", source_id: purchase.id }, { onConflict: "user_id,product_id,source,source_id" }));
}

async function syncSubscription(sub) {
  const user_id = await userFor(sub);
  const product_id = sub.metadata?.product_id || "pass";
  if (!user_id) return;   // assinatura de cliente que não é usuário da loja (teste do painel): nada a liberar
  const item = sub.items?.data?.[0];
  const periodEnd = item?.current_period_end || sub.current_period_end;   // API 2025+ move o período para o item
  await checked(admin.from("subscriptions").upsert({
    id: sub.id, user_id, product_id, price_id: item?.price?.id || null, status: sub.status,
    current_period_end: iso(periodEnd), cancel_at_period_end: !!sub.cancel_at_period_end, updated_at: new Date().toISOString(),
  }));
  if (active(sub.status)) {
    await checked(admin.from("entitlements").upsert({
      user_id, product_id, source: "subscription", source_id: sub.id,
      expires_at: periodEnd ? plusDays(periodEnd, GRACE_DAYS) : null, revoked_at: null,
    }, { onConflict: "user_id,product_id,source,source_id" }));
  } else if (sub.status === "canceled" || sub.status === "unpaid" || sub.status === "incomplete_expired") {
    await checked(admin.from("entitlements").update({ revoked_at: new Date().toISOString(), note: sub.status }).eq("source", "subscription").eq("source_id", sub.id));
  }
  // past_due: mantém até expires_at (fim do período + folga); o Stripe ainda está tentando cobrar
}
