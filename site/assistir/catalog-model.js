/* Regras compartilhadas pelo acervo e pelo player. Sem DOM ou escrita de progresso. */
((root, factory) => {
  const model = factory();
  if (typeof module === "object" && module.exports) module.exports = model;
  else root.AgentFlixWatchModel = model;
})(globalThis, () => {
  "use strict";

  function episodes(series) {
    return series.seasons.flatMap((season, si) =>
      season.eps.map((episode, ei) => ({
        season: si,
        ep: ei,
        number: season.n,
        episode,
      })),
    );
  }

  function progress(episode, read) {
    const value = read(`agentflix-prog-${episode.uid}`, null);
    return value &&
      Number.isFinite(value.t) &&
      value.t >= 0 &&
      Number.isFinite(value.at)
      ? { t: Math.min(value.t, episode.d), at: value.at }
      : null;
  }

  function resume(series, read) {
    const all = episodes(series);
    const last = all
      .map((item) => ({ ...item, saved: progress(item.episode, read) }))
      .filter((item) => item.saved)
      .sort((a, b) => b.saved.at - a.saved.at)[0];
    const first = Math.max(
      0,
      series.seasons.findIndex((s) => !s.caminho && s.eps.length),
    );
    if (!last) return { season: first, ep: 0, fresh: true };
    const done = last.saved.t / last.episode.d >= 0.95;
    if (!done) return { season: last.season, ep: last.ep, fresh: false };
    const season = series.seasons[last.season];
    if (last.ep + 1 < season.eps.length)
      return { season: last.season, ep: last.ep + 1, fresh: true };
    if (last.episode.escolha) {
      const chosen = read(`agentflix-caminho-${series.slug}`, null);
      const next = chosen
        ? series.seasons.findIndex((s) => +s.n === +chosen.temporada)
        : -1;
      if (next >= 0 && series.seasons[next].eps.length)
        return { season: next, ep: 0, fresh: true };
      return { season: last.season, ep: last.ep, fresh: true };
    }
    const next = season.caminho
      ? series.seasons.findIndex(
          (s) => season.depois !== undefined && +s.n === +season.depois,
        )
      : series.seasons.findIndex(
          (s, i) => i > last.season && !s.caminho && s.eps.length,
        );
    if (next >= 0 && series.seasons[next].eps.length)
      return { season: next, ep: 0, fresh: true };
    return { season: last.season, ep: last.ep, fresh: true, finished: true };
  }

  function available(data) {
    return (data.series || []).filter(
      (s) => s.catalogo !== false && s.seasons?.some((t) => t.eps?.length),
    );
  }

  function continuing(data, read) {
    return available(data)
      .map((series) => {
        const saved = episodes(series)
          .map((e) => progress(e.episode, read))
          .filter(Boolean);
        return {
          series,
          resume: resume(series, read),
          at: Math.max(0, ...saved.map((p) => p.at)),
        };
      })
      .filter((item) => item.at > 0 && !item.resume.finished)
      .sort((a, b) => b.at - a.at);
  }

  function rows(data) {
    const list = available(data);
    const definitions = data.vitrine?.fileiras || [
      { id: "series", titulo: "Séries do AgentFlix" },
    ];
    return definitions
      .map((row) => ({
        ...row,
        series: row.genero
          ? list.filter((s) => s.gen?.includes(row.genero))
          : list,
      }))
      .filter((row) => row.series.length);
  }

  return Object.freeze({
    episodes,
    progress,
    resume,
    available,
    continuing,
    rows,
  });
});
