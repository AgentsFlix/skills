# Contexto: diagnose-funnel

Contexto para diagnóstico de funil por produto

Origem: manifest `diagnose-funnel` (32 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|
| `buyer_journey_exists` | `products/{product}/marketing/buyer-journey.yaml` | `_exists` | boolean |
| `buyer_journey_stages_count` | `products/{product}/marketing/buyer-journey.yaml` | `buyer_journey` | array_length |
| `buyer_journey_touchpoints_total` | `products/{product}/marketing/buyer-journey.yaml` | `buyer_journey.*.touchpoints` | array_length_sum |
| `buyer_journey_dropout_prevention` | `products/{product}/marketing/buyer-journey.yaml` | `dropout_prevention` | array_length |
| `buyer_journey_retention_hooks` | `products/{product}/marketing/buyer-journey.yaml` | `retention_hooks` | array_length |
| `buyer_journey_metrics` | `products/{product}/marketing/buyer-journey.yaml` | `overall_journey_metrics` | completeness |
| `conversion_funnel_exists` | `products/{product}/marketing/conversion-funnel.yaml` | `_exists` | boolean |
| `funnel_stages_count` | `products/{product}/marketing/conversion-funnel.yaml` | `_stages` | integer |
| `funnel_awareness_volume` | `products/{product}/marketing/conversion-funnel.yaml` | `stage_1_awareness.volume_target` | number |
| `funnel_conversion_rate` | `products/{product}/marketing/conversion-funnel.yaml` | `stage_5_conversion.conversion_from_decision` | percentage |
| `funnel_math_complete` | `products/{product}/marketing/conversion-funnel.yaml` | `funnel_math` | completeness |
| `funnel_health_score` | `products/{product}/marketing/conversion-funnel.yaml` | `funnel_health_score` | score_block |
| `funnel_bottleneck_stages` | `products/{product}/marketing/conversion-funnel.yaml` | `*.bottleneck_diagnostic` | array |
| `email_sequences_exists` | `products/{product}/marketing/email-sequences.yaml` | `_exists` | boolean |
| `email_sequences_count` | `products/{product}/marketing/email-sequences.yaml` | `sequences` | array_length |
| `email_total_emails` | `products/{product}/marketing/email-sequences.yaml` | `sequences.*.emails` | array_length_sum |
| `campaign_brief_exists` | `products/{product}/marketing/campaign-brief.yaml` | `_exists` | boolean |
| `campaign_objective` | `products/{product}/marketing/campaign-brief.yaml` | `objective.primary_outcome` | string |
| `campaign_awareness_stage` | `products/{product}/marketing/campaign-brief.yaml` | `audience.awareness_stage` | string |
| `campaign_traffic_temperature` | `products/{product}/marketing/campaign-brief.yaml` | `audience.traffic_temperature` | string |
| `campaign_channels_count` | `products/{product}/marketing/campaign-brief.yaml` | `channels.in_scope` | array_length |
| `campaign_proof_sources` | `products/{product}/marketing/campaign-brief.yaml` | `proof.proof_sources` | array_length |
| `hooks_exists` | `products/{product}/marketing/hooks.yaml` | `_exists` | boolean |
| `hooks_count` | `products/{product}/marketing/hooks.yaml` | `hooks` | array_length |
| `headlines_exists` | `products/{product}/marketing/headlines.yaml` | `_exists` | boolean |
| `headlines_count` | `products/{product}/marketing/headlines.yaml` | `headlines` | array_length |
| `sales_page_exists` | `products/{product}/marketing/sales-page.yaml` | `_exists` | boolean |
| `launch_playbook_exists` | `products/{product}/marketing/launch-playbook.yaml` | `_exists` | boolean |
| `webinar_script_exists` | `products/{product}/marketing/webinar-script.yaml` | `_exists` | boolean |
| `icp_awareness_level` | `company/diagnosis.yaml` | `market_awareness_level.identified_level` | string |
| `icp_sophistication_stage` | `company/diagnosis.yaml` | `market_sophistication_stage.identified_stage` | string |
| `icp_action_triggers` | `company/icp.yaml` | `motivations_action_triggers` | array_length |
