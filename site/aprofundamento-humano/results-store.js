(function (root) {
  "use strict";
  const ids = ["disc", "aprendizagem", "acao", "big-five", "eneagrama", "jung"];
  const recordKeys = ["schema", "id", "type", "title", "description", "tags", "status", "created", "updated", "sources", "confidence", "verified", "stale_after", "relations", "completed_at", "recorded_at", "timezone", "date_status", "evidence", "assessment", "review"];
  const assessmentKeys = ["id", "title", "version", "metric", "limitations", "sources", "summary", "code", "dimensions"];
  const dimensionKeys = ["key", "label", "raw", "maximum", "value", "unit", "low_pole", "high_pole", "interpretation", "experiment", "reflection", "caution"];
  const pick = (source, keys) => Object.fromEntries(keys.filter(key => Object.hasOwn(source, key)).map(key => [key, source[key]]));
  function project(record) {
    if (!record || record.schema !== "agentflix-assessment-okf/1.0.0" || !ids.includes(record.assessment?.id) ||
        !Array.isArray(record.assessment.dimensions) || !record.assessment.dimensions.length) throw Error("invalid result");
    const result = pick(record, recordKeys);
    result.assessment = pick(record.assessment, assessmentKeys);
    result.assessment.dimensions = record.assessment.dimensions.map(d => {
      if (!Number.isFinite(d.value) || d.value < 0 || d.value > 100) throw Error("invalid score");
      return pick(d, dimensionKeys);
    });
    const sources = list => list.map(s => pick(s, ["title", "url"]));
    result.sources = sources(record.sources);
    result.assessment.sources = sources(record.assessment.sources);
    result.relations = record.relations.map(r => pick(r, ["type", "target"]));
    result.review = pick(record.review, ["after_days", "date", "schedule_status"]);
    // Somente o registro exportável. Respostas e fingerprint jamais são enviados.
    return JSON.parse(JSON.stringify(result));
  }
  function create(client, currentUser) {
    const owner = () => { const id = currentUser(); if (!id) throw Error("sign in required"); return id; };
    const unchanged = id => { if (id !== currentUser()) throw Error("account changed"); };
    return Object.freeze({
      async save(record) {
        const id = owner(), payload = project(record);
        const { data, error } = await client.rpc("save_assessment_result", { p_result: payload, p_expected_user: id });
        unchanged(id);
        if (error) throw error;
        if (!data || data.record_id !== payload.id) throw Error("save not confirmed");
        return data;
      },
      async list(offset = 0) {
        const id = owner();
        const { data, error } = await client.from("assessment_results").select("record_id,assessment_id,result,saved_at")
          .eq("user_id", id).order("saved_at", { ascending: false }).order("record_id", { ascending: false }).range(offset, offset + 19);
        unchanged(id);
        if (error) throw error;
        return data.map(row => ({ ...row, result: project(row.result) }));
      },
      async remove(recordId) {
        const id = owner();
        const { error } = await client.rpc("delete_assessment_result", { p_record_id: recordId, p_expected_user: id });
        unchanged(id);
        if (error) throw error;
      }
    });
  }
  root.AgentFlixAssessmentStore = Object.freeze({ create, project });
})(typeof window === "undefined" ? globalThis : window);
