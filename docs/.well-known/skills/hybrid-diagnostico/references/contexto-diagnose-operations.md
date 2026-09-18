# Contexto: diagnose-operations

Contexto para diagnóstico de maturidade operacional

Origem: manifest `diagnose-operations` (37 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|
| `team_structure_exists` | `operations/team-structure.yaml` | `_exists` | boolean |
| `team_headcount` | `operations/team-structure.yaml` | `current_team.total_headcount` | integer |
| `team_roles_filled_count` | `operations/team-structure.yaml` | `current_team.roles_filled` | array_length |
| `team_founder_wearing_hats` | `operations/team-structure.yaml` | `current_team.founder_wearing_hats` | string |
| `team_ideal_departments_count` | `operations/team-structure.yaml` | `ideal_structure.departments` | array_length |
| `team_hiring_priority` | `operations/team-structure.yaml` | `hiring_priority` | completeness |
| `team_strength_score` | `operations/team-structure.yaml` | `team_strength_score` | score_block |
| `pricing_exists` | `operations/pricing-strategy.yaml` | `_exists` | boolean |
| `pricing_model` | `operations/pricing-strategy.yaml` | `pricing_foundation.pricing_model` | string |
| `pricing_current_price` | `operations/pricing-strategy.yaml` | `pricing_foundation.current_price` | number |
| `pricing_value_ratio` | `operations/pricing-strategy.yaml` | `pricing_foundation.price_to_value_ratio` | string |
| `pricing_competitive_position` | `operations/pricing-strategy.yaml` | `competitive_position.your_position` | string |
| `pricing_experiments_count` | `operations/pricing-strategy.yaml` | `pricing_experiments` | array_length |
| `pricing_strength_score` | `operations/pricing-strategy.yaml` | `pricing_strength_score` | score_block |
| `kpi_exists` | `operations/kpi-scorecards.yaml` | `_exists` | boolean |
| `kpi_north_star` | `operations/kpi-scorecards.yaml` | `north_star.metric_name` | string |
| `kpi_revenue_metrics_filled` | `operations/kpi-scorecards.yaml` | `revenue_metrics` | completeness |
| `kpi_acquisition_metrics_filled` | `operations/kpi-scorecards.yaml` | `acquisition_metrics` | completeness |
| `kpi_retention_metrics_filled` | `operations/kpi-scorecards.yaml` | `retention_metrics` | completeness |
| `kpi_review_cadence` | `operations/kpi-scorecards.yaml` | `review_cadence` | completeness |
| `kpi_strength_score` | `operations/kpi-scorecards.yaml` | `kpi_strength_score` | score_block |
| `commission_exists` | `operations/commission-design.yaml` | `_exists` | boolean |
| `commission_philosophy` | `operations/commission-design.yaml` | `compensation_philosophy.approach` | string |
| `commission_roles_count` | `operations/commission-design.yaml` | `commission_structure` | array_length |
| `commission_strength_score` | `operations/commission-design.yaml` | `commission_strength_score` | score_block |
| `call_script_exists` | `operations/sales-process/call-script.yaml` | `_exists` | boolean |
| `discovery_framework_exists` | `operations/sales-process/discovery-framework.yaml` | `_exists` | boolean |
| `follow_up_system_exists` | `operations/sales-process/follow-up-system.yaml` | `_exists` | boolean |
| `prospecting_playbook_exists` | `operations/sales-process/prospecting-playbook.yaml` | `_exists` | boolean |
| `show_rate_exists` | `operations/sales-process/show-rate-optimization.yaml` | `_exists` | boolean |
| `hiring_playbook_exists` | `operations/hiring/hiring-playbook.yaml` | `_exists` | boolean |
| `interview_framework_exists` | `operations/hiring/interview-framework.yaml` | `_exists` | boolean |
| `ramp_plan_exists` | `operations/hiring/ramp-plan.yaml` | `_exists` | boolean |
| `annual_revenue` | `company/company-profile.yaml` | `key_metrics.annual_revenue` | string |
| `yoy_growth` | `company/company-profile.yaml` | `key_metrics.yoy_growth` | string |
| `customer_count` | `company/company-profile.yaml` | `key_metrics.customer_count` | integer |
| `current_stage` | `company/company-profile.yaml` | `stage.current_stage` | string |
