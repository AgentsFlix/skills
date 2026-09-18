# Contexto: diagnose-movement

Contexto para diagnóstico de maturidade do movimento cultural

Origem: manifest `diagnose-movement` (35 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|
| `tribe_identity_exists` | `movement/foundation/tribe-identity.yaml` | `_exists` | boolean |
| `tribe_archetypes_count` | `movement/foundation/tribe-identity.yaml` | `tribe.archetypes` | array_length |
| `tribe_transformation_stages` | `movement/foundation/tribe-identity.yaml` | `tribe.transformation_arc.stages` | array_length |
| `tribe_semantic_clusters` | `movement/foundation/tribe-identity.yaml` | `tribe.semantic_clusters` | array_length |
| `tribe_narrative_gaps` | `movement/foundation/tribe-identity.yaml` | `tribe.narrative_gaps` | array_length |
| `leaders_exists` | `movement/identity/leaders.yaml` | `_exists` | boolean |
| `leaders_count` | `movement/identity/leaders.yaml` | `leaders` | array_length |
| `leaders_have_values` | `movement/identity/leaders.yaml` | `leaders.*.top_values` | boolean_any |
| `leaders_have_phrases` | `movement/identity/leaders.yaml` | `leaders.*.signature_phrases` | boolean_any |
| `founders_dynamics_exists` | `movement/identity/founders-dynamics.yaml` | `_exists` | boolean |
| `matrix_n3_n4_exists` | `movement/identity/matrix-n3-n4.yaml` | `_exists` | boolean |
| `cosmology_exists` | `movement/system/cosmology.yaml` | `_exists` | boolean |
| `cosmology_axioms_count` | `movement/system/cosmology.yaml` | `cosmology.axioms` | array_length |
| `cosmology_doctrine_core_count` | `movement/system/cosmology.yaml` | `cosmology.doctrine_core` | array_length |
| `mrd_doctrines_exists` | `movement/system/mrd-bank/doctrines.yaml` | `_exists` | boolean |
| `mrd_myths_exists` | `movement/system/mrd-bank/myths.yaml` | `_exists` | boolean |
| `mrd_rites_exists` | `movement/system/mrd-bank/rites.yaml` | `_exists` | boolean |
| `mrd_vocabulary_exists` | `movement/system/mrd-bank/vocabulary.yaml` | `_exists` | boolean |
| `movement_health_exists` | `movement/diagnostics/movement-health.yaml` | `_exists` | boolean |
| `health_doctrine_consistency` | `movement/diagnostics/movement-health.yaml` | `health.doctrine_consistency` | string |
| `health_ritual_adoption` | `movement/diagnostics/movement-health.yaml` | `health.ritual_adoption` | string |
| `health_narrative_cohesion` | `movement/diagnostics/movement-health.yaml` | `health.narrative_cohesion` | string |
| `health_flywheel_know_trust` | `movement/diagnostics/movement-health.yaml` | `health.flywheel_transition_health.know_to_trust` | string |
| `health_root_causes` | `movement/diagnostics/movement-health.yaml` | `analysis.root_causes` | array_length |
| `cycle_strategy_exists` | `movement/cycle/strategy.yaml` | `_exists` | boolean |
| `cycle_type` | `movement/cycle/strategy.yaml` | `cycle_strategy.cycle_type` | string |
| `cycle_objective_metric` | `movement/cycle/strategy.yaml` | `cycle_strategy.objective.primary_metric` | string |
| `cycle_channels_count` | `movement/cycle/strategy.yaml` | `cycle_strategy.channel_strategy` | array_length |
| `cycle_doctrines_prioritized` | `movement/cycle/strategy.yaml` | `cycle_strategy.doctrine_prioritization` | array_length |
| `fenomenologia_exists` | `movement/reading/fenomenologia-cultural.yaml` | `_exists` | boolean |
| `ideological_personas_exists` | `movement/reading/persona/ideological-personas.yaml` | `_exists` | boolean |
| `intake_sources_exists` | `movement/intake/sources.yaml` | `_exists` | boolean |
| `brand_archetype` | `brand/brandbook.yaml` | `archetype_mix` | object |
| `brand_voice_tone` | `brand/brandbook.yaml` | `voice` | object |
| `brand_enemy` | `brand/brandbook.yaml` | `positioning.enemy_core` | string |
