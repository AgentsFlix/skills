# Contexto: diagnose-offer

Contexto para diagnóstico de força da oferta por produto

Origem: manifest `diagnose-offer` (39 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|
| `offerbook_exists` | `products/{product}/offerbook.yaml` | `_exists` | boolean |
| `offer_name` | `products/{product}/offerbook.yaml` | `positioning.offer_name` | string |
| `offer_price` | `products/{product}/offerbook.yaml` | `offer_architecture.grand_slam_offer.price` | number |
| `offer_payment_options` | `products/{product}/offerbook.yaml` | `offer_architecture.grand_slam_offer.payment_options` | string |
| `offer_unique_mechanism` | `products/{product}/offerbook.yaml` | `positioning.unique_mechanism` | string |
| `offer_modules_count` | `products/{product}/offerbook.yaml` | `core_modules` | array_length |
| `offer_bonuses_count` | `products/{product}/offerbook.yaml` | `offer_architecture.bonuses` | array_length |
| `offer_objections_count` | `products/{product}/offerbook.yaml` | `objections_responses` | array_length |
| `offer_diagnostic_summary` | `products/{product}/offerbook.yaml` | `diagnostic_summary` | string |
| `value_equation_exists` | `products/{product}/value-equation.yaml` | `_exists` | boolean |
| `ve_dream_outcome_score` | `products/{product}/value-equation.yaml` | `composite_diagnostic.dream_outcome_score` | number |
| `ve_perceived_likelihood_score` | `products/{product}/value-equation.yaml` | `composite_diagnostic.perceived_likelihood_score` | number |
| `ve_time_delay_score` | `products/{product}/value-equation.yaml` | `composite_diagnostic.time_delay_score` | number |
| `ve_effort_sacrifice_score` | `products/{product}/value-equation.yaml` | `composite_diagnostic.effort_sacrifice_score` | number |
| `ve_weakest_variable` | `products/{product}/value-equation.yaml` | `composite_diagnostic.weakest_variable_analysis` | string |
| `proof_exists` | `products/{product}/proof.yaml` | `_exists` | boolean |
| `proof_case_studies_count` | `products/{product}/proof.yaml` | `case_studies` | array_length |
| `proof_testimonials_by_archetype_count` | `products/{product}/proof.yaml` | `testimonials_by_archetype` | array_length |
| `proof_statistics_count` | `products/{product}/proof.yaml` | `statistics` | array_length |
| `proof_before_after_count` | `products/{product}/proof.yaml` | `before_after_comparisons` | array_length |
| `proof_verification_tiers` | `products/{product}/proof.yaml` | `header_summary.verification_tier_distribution` | object |
| `proof_missing_to_gather` | `products/{product}/proof.yaml` | `missing_proof_to_gather` | array_length |
| `testimonials_exists` | `products/{product}/testimonials.yaml` | `_exists` | boolean |
| `testimonials_total_count` | `products/{product}/testimonials.yaml` | `testimonials_database` | array_length |
| `testimonials_by_awareness_coverage` | `products/{product}/testimonials.yaml` | `testimonials_by_awareness_level` | array_length |
| `testimonials_by_result_coverage` | `products/{product}/testimonials.yaml` | `testimonials_by_result` | array_length |
| `testimonials_video_count` | `products/{product}/testimonials.yaml` | `video_testimonial_format` | array_length |
| `testimonials_checklist_completion` | `products/{product}/testimonials.yaml` | `testimonial_collection_checklist` | percentage |
| `guarantee_exists` | `products/{product}/guarantee-design.yaml` | `_exists` | boolean |
| `guarantee_level` | `products/{product}/guarantee-design.yaml` | `guarantee_design.chosen_level` | string |
| `guarantee_name` | `products/{product}/guarantee-design.yaml` | `guarantee_language.guarantee_name` | string |
| `guarantee_ethical_passed` | `products/{product}/guarantee-design.yaml` | `ethical_filter.ethical_verdict` | string |
| `guarantee_diagnostic` | `products/{product}/guarantee-design.yaml` | `diagnostic_summary` | object |
| `competitor_exists` | `products/{product}/competitor-analysis.yaml` | `_exists` | boolean |
| `competitor_count` | `products/{product}/competitor-analysis.yaml` | `competitive_landscape` | array_length |
| `competitor_your_position` | `products/{product}/competitor-analysis.yaml` | `positioning_map.your_position` | object |
| `competitor_differentiation_strength` | `products/{product}/competitor-analysis.yaml` | `competitive_strength_score.differentiation_strength` | number |
| `competitor_unfair_advantage` | `products/{product}/competitor-analysis.yaml` | `differentiation.your_unfair_advantage` | string |
| `pricing_anchoring_exists` | `products/{product}/pricing-anchoring.yaml` | `_exists` | boolean |
