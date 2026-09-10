/* Regras compartilhadas pelo acervo e pelo player. Sem DOM ou escrita de progresso. */
((root, factory) => {
  const model = factory();
  if (typeof module === "object" && module.exports) module.exports = model;
  else root.AgentFlixWatchModel = model;
})(globalThis, () => {
  "use strict";

  const episodeNumber = (episode, index) => episode.n ?? index + 1;

  function lessonUrl(series, seasonIndex, episodeIndex) {
    const season = series.seasons[seasonIndex], episode = season.eps[episodeIndex];
    return episode.share_url || `/assistir/?s=${encodeURIComponent(series.slug)}#t${season.n}e${episodeNumber(episode, episodeIndex)}`;
  }

  function lessonRoute(path) {
    const match = /^\/aulas\/([a-z0-9]+(?:-[a-z0-9]+)*)\/t([1-9]\d*)\/e([1-9]\d*)\/(?:index\.html)?$/.exec(path);
    return match ? { slug: match[1], season: +match[2], episode: +match[3] } : null;
  }

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

  // Os números do conteúdo são de base 1; os índices da interface são de base 0.
  function choiceTarget(series, option) {
    if (!option || option.em_breve) return null;
    const season = series.seasons.findIndex((s) => +s.n === +option.temporada);
    const number = option.episodio ?? 1;
    if (season < 0 || !Number.isInteger(number) || number < 1) return null;
    const ep = series.seasons[season].eps.findIndex((e, i) => episodeNumber(e, i) === number);
    return series.seasons[season].eps[ep] ? { season, ep } : null;
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
    const done = last.episode.partes?.length
      ? read(`agentflix-finished-${last.episode.uid}`, false) === true
      : last.saved.t / last.episode.d >= 0.95;
    if (!done) return { season: last.season, ep: last.ep, fresh: false };
    const season = series.seasons[last.season];
    if (last.episode.escolha) {
      const chosen = read(`agentflix-caminho-${series.slug}`, null);
      const option =
        chosen &&
        last.episode.escolha.opcoes.find(
          (o) =>
            +o.temporada === +chosen.temporada &&
            (o.episodio ?? 1) === (chosen.episodio ?? 1),
        );
      const next = choiceTarget(series, option);
      if (next && (next.season !== last.season || next.ep !== last.ep))
        return { ...next, fresh: true };
      return { season: last.season, ep: last.ep, fresh: true };
    }
    if (last.ep + 1 < season.eps.length)
      return { season: last.season, ep: last.ep + 1, fresh: true };
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
      (s) => s.catalogo !== false && (s.em_breve === true || s.seasons?.some((t) => t.eps?.length || t.atividades?.length)),
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
    episodeNumber,
    lessonUrl,
    lessonRoute,
    episodes,
    progress,
    choiceTarget,
    resume,
    available,
    continuing,
    rows,
  });
});
