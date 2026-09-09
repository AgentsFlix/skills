const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const sandbox = { module: { exports: {} } };
require("node:vm").runInNewContext(
  fs.readFileSync(
    path.join(__dirname, "../site/assistir/catalog-model.js"),
    "utf8",
  ),
  sandbox,
);
const model = sandbox.module.exports;
const resume = (series, read) =>
  JSON.parse(JSON.stringify(model.resume(series, read)));
const continuing = (data, read) => Array.from(model.continuing(data, read));
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../site/assistir/series.json")),
);
const upcoming = data.series.find(s => s.slug === "hermes-em-operacao");
assert.ok(model.available(data).some(s => s === upcoming));
assert.equal(model.episodes(upcoming).length, 0);
assert.equal(model.continuing({series:[upcoming]}, () => null).length, 0);
assert.equal(model.available({series:[{...upcoming, em_breve: false}]}).length, 0);
data.series = data.series.filter(s => s !== upcoming);
const series = data.series.find((s) => s.slug === "hermes-agent");
const memory = {};
const read = (key, fallback) => memory[key] ?? fallback;
const save = (episode, t, at) =>
  (memory[`agentflix-prog-${episode.uid}`] = { t, at });
const first = series.seasons[0].eps[0];
const branch = series.seasons[1];
assert.deepEqual(
  model.available(data).map((s) => s.slug),
  ["hermes-agent"],
);
assert.deepEqual(resume(series, read), { season: 0, ep: 0, fresh: true });
assert.deepEqual(continuing(data, read), []);
save(first, 60, 1);
assert.equal(resume(series, read).fresh, false);
assert.equal(model.continuing(data, read)[0].series.slug, series.slug);
save(first, first.d, 2);
assert.equal(resume(series, read).ep, 0, "a escolha precede o episódio seguinte da mesma temporada");
assert.equal(
  resume(series, read).season,
  0,
  "raiz sem escolha não pula para um caminho",
);
memory[`agentflix-caminho-${series.slug}`] = { temporada: 1, episodio: 2 };
assert.deepEqual(resume(series, read), { season: 0, ep: 1, fresh: true });
assert.deepEqual(JSON.parse(JSON.stringify(model.choiceTarget(series, first.escolha.opcoes[0]))), { season: 0, ep: 1 });
for (const choice of [{ temporada: 1 }, { temporada: 1, episodio: 99 }, { temporada: 2 }, { temporada: 3, episodio: 2 }]) {
  memory[`agentflix-caminho-${series.slug}`] = choice;
  assert.deepEqual(resume(series, read), { season: 0, ep: 0, fresh: true }, "escolha inválida ou não oferecida volta à raiz");
}
assert.equal(model.choiceTarget(series, { temporada: 1, episodio: 0 }), null);
assert.equal(model.choiceTarget(series, { temporada: 1, episodio: 1.5 }), null);
assert.equal(model.choiceTarget(series, { temporada: 1, episodio: 99 }), null);
assert.equal(model.choiceTarget(series, { temporada: 1, episodio: 2, em_breve: true }), null);
const easy = series.seasons[0].eps[1];
save(easy, easy.d, 3);
assert.deepEqual(resume(series, read), { season: 0, ep: 2, fresh: true }, "T1E2 segue para o onboarding em T1E3");
assert.equal(continuing(data, read)[0].series.slug, series.slug);
const onboarding = series.seasons[0].eps[2];
save(onboarding, 120, 4);
assert.deepEqual(resume(series, read), { season: 0, ep: 2, fresh: false });
save(onboarding, onboarding.d, 5);
assert.equal(resume(series, read).finished, true, "fim de T1E3 não inicia o caminho Difícil");
assert.deepEqual(continuing(data, read), []);
delete memory[`agentflix-prog-${easy.uid}`];
delete memory[`agentflix-prog-${onboarding.uid}`];
memory[`agentflix-caminho-${series.slug}`] = { temporada: 3 };
assert.deepEqual(resume(series, read), { season: 1, ep: 0, fresh: true });
save(branch.eps[0], branch.eps[0].d, 3);
assert.deepEqual(resume(series, read), { season: 1, ep: 1, fresh: true });
save(branch.eps.at(-1), branch.eps.at(-1).d, 4);
assert.equal(resume(series, read).finished, true);
assert.deepEqual(
  continuing(data, read),
  [],
  "fim do caminho não vira retomada eterna",
);
const extra = structuredClone(series);
extra.slug = "nova-serie";
extra.name = "Nova série";
extra.gen = ["Novo gênero"];
extra.seasons.forEach((season) =>
  season.eps.forEach(
    (episode, i) => (episode.uid = `${season.n}${i}`.padEnd(32, "f")),
  ),
);
const expanded = { ...data, series: [...data.series, extra] };
assert.equal(
  model.available(expanded).length,
  2,
  "nova série entra sem editar HTML ou registro paralelo",
);
assert.equal(model.rows(expanded)[0].series.length, 2);
assert.equal(
  model.rows({
    ...expanded,
    vitrine: {
      fileiras: [{ id: "tema", titulo: "Tema", genero: "Novo gênero" }],
    },
  })[0].series[0].slug,
  extra.slug,
);
assert.equal(
  model.rows({
    ...data,
    vitrine: {
      fileiras: [{ id: "vazio", titulo: "Sem série", genero: "Ausente" }],
    },
  }).length,
  0,
);
save(extra.seasons[0].eps[0], 30, 10);
assert.equal(model.continuing(expanded, read)[0].series.slug, extra.slug);
assert.equal(
  resume(series, read).finished,
  true,
  "progresso não atravessa séries",
);
save(extra.seasons[0].eps[0], -1, 11);
assert.equal(model.resume(extra, read).fresh, true);
console.log(
  "PASS: acervo por dados, múltiplas séries, filtros, retomada, escolha de caminho e fim de série",
);
