# Contexto: diagnose-retention

Contexto para diagnóstico de retenção por produto

Origem: manifest `diagnose-retention` (30 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|
| `onboarding_exists` | `products/{product}/onboarding/onboarding-flow.yaml` | `_exists` | boolean |
| `onboarding_total_duration` | `products/{product}/onboarding/onboarding-flow.yaml` | `onboarding_overview.total_duration` | string |
| `onboarding_first_value_moment` | `products/{product}/onboarding/onboarding-flow.yaml` | `onboarding_overview.first_value_moment` | string |
| `onboarding_day0_actions_count` | `products/{product}/onboarding/onboarding-flow.yaml` | `day_0_welcome.actions` | array_length |
| `onboarding_completion_criteria` | `products/{product}/onboarding/onboarding-flow.yaml` | `onboarding_completion.completion_criteria` | string |
| `onboarding_strength_score` | `products/{product}/onboarding/onboarding-flow.yaml` | `onboarding_strength_score` | score_block |
| `churn_prevention_exists` | `products/{product}/retention/churn-prevention.yaml` | `_exists` | boolean |
| `churn_signals_count` | `products/{product}/retention/churn-prevention.yaml` | `churn_signals` | completeness |
| `churn_interventions_count` | `products/{product}/retention/churn-prevention.yaml` | `interventions` | completeness |
| `churn_top_reasons` | `products/{product}/retention/churn-prevention.yaml` | `churn_analysis.top_churn_reasons` | array_length |
| `churn_strength_score` | `products/{product}/retention/churn-prevention.yaml` | `churn_prevention_score` | score_block |
| `nps_exists` | `products/{product}/retention/nps-feedback-loop.yaml` | `_exists` | boolean |
| `nps_current` | `products/{product}/retention/nps-feedback-loop.yaml` | `nps_measurement.current_nps` | number |
| `nps_target` | `products/{product}/retention/nps-feedback-loop.yaml` | `nps_measurement.target_nps` | number |
| `nps_measurement_frequency` | `products/{product}/retention/nps-feedback-loop.yaml` | `nps_measurement.measurement_frequency` | string |
| `nps_touchpoints_count` | `products/{product}/retention/nps-feedback-loop.yaml` | `feedback_touchpoints` | array_length |
| `nps_strength_score` | `products/{product}/retention/nps-feedback-loop.yaml` | `feedback_loop_score` | score_block |
| `retention_strategy_exists` | `products/{product}/retention/retention-strategy.yaml` | `_exists` | boolean |
| `retention_30d_rate` | `products/{product}/retention/retention-strategy.yaml` | `current_metrics.first_30d_retention` | percentage |
| `retention_90d_rate` | `products/{product}/retention/retention-strategy.yaml` | `current_metrics.first_90d_retention` | percentage |
| `retention_annual_rate` | `products/{product}/retention/retention-strategy.yaml` | `current_metrics.annual_retention` | percentage |
| `retention_churn_monthly` | `products/{product}/retention/retention-strategy.yaml` | `current_metrics.churn_rate_monthly` | percentage |
| `retention_layers_filled` | `products/{product}/retention/retention-strategy.yaml` | `_completeness` | completeness |
| `retention_strength_score` | `products/{product}/retention/retention-strategy.yaml` | `retention_strength_score` | score_block |
| `adoption_exists` | `products/{product}/adoption-signals.yaml` | `_exists` | boolean |
| `adoption_activation_definition` | `products/{product}/adoption-signals.yaml` | `adoption_model.activation_definition` | string |
| `adoption_risk_signals_count` | `products/{product}/adoption-signals.yaml` | `risk_signals` | array_length |
| `adoption_diagnostic_summary` | `products/{product}/adoption-signals.yaml` | `diagnostic_summary` | object |
| `curriculum_exists` | `products/{product}/curriculum.yaml` | `_exists` | boolean |
| `curriculum_modules_count` | `products/{product}/curriculum.yaml` | `modules` | array_length |
