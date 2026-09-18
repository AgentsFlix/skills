# Contexto: diagnose-authority

Contexto para diagnóstico de autoridade do fundador

Origem: manifest `diagnose-authority` (29 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|
| `founder_dna_exists` | `company/founder-dna.yaml` | `_exists` | boolean |
| `founder_name` | `company/founder-dna.yaml` | `founder_essence.professional_name` | string |
| `founder_archetype` | `company/founder-dna.yaml` | `founder_essence.archetype` | string |
| `founder_origin_story_complete` | `company/founder-dna.yaml` | `origin_story` | completeness |
| `founder_years_experience` | `company/founder-dna.yaml` | `professional_background.years_of_experience.total_years` | number |
| `founder_credibility_proofs_count` | `company/founder-dna.yaml` | `credibility_foundation` | array_length |
| `founder_philosophy_complete` | `company/founder-dna.yaml` | `philosophy` | completeness |
| `founder_teaching_philosophy` | `company/founder-dna.yaml` | `teaching_philosophy.core_teaching_principle` | string |
| `founder_signature_insights_count` | `company/founder-dna.yaml` | `signature_insights` | array_length |
| `founder_narrative_headline` | `company/founder-dna.yaml` | `founder_narrative.headline` | string |
| `founder_checklist_completion` | `company/founder-dna.yaml` | `completion_checklist` | percentage |
| `credentials_exists` | `company/credentials.yaml` | `_exists` | boolean |
| `credentials_education_count` | `company/credentials.yaml` | `formal_education` | array_length |
| `credentials_certifications_count` | `company/credentials.yaml` | `formal_education.professional_certifications` | array_length |
| `credentials_awards_count` | `company/credentials.yaml` | `awards` | array_length |
| `credentials_speaking_count` | `company/credentials.yaml` | `speaking_engagements` | array_length |
| `credentials_media_count` | `company/credentials.yaml` | `media_appearances` | array_length |
| `credentials_notable_clients_count` | `company/credentials.yaml` | `notable_clients` | array_length |
| `credentials_teaching_students` | `company/credentials.yaml` | `teaching_credentials.total_students_taught` | number |
| `credentials_verification_status` | `company/credentials.yaml` | `verification` | object |
| `credentials_checklist_completion` | `company/credentials.yaml` | `completion_checklist` | percentage |
| `authority_story_exists` | `company/authority-story.yaml` | `_exists` | boolean |
| `authority_stack_layers_filled` | `company/authority-story.yaml` | `authority_stack` | completeness |
| `authority_inflection_points_count` | `company/authority-story.yaml` | `inflection_points` | array_length |
| `authority_one_page_versions` | `company/authority-story.yaml` | `one_page_story` | completeness |
| `authority_checklist_completion` | `company/authority-story.yaml` | `completion_checklist` | percentage |
| `total_proof_files` | `products/*/proof.yaml` | `_count` | integer |
| `total_case_studies_all_products` | `products/*/proof.yaml` | `case_studies` | array_length_sum |
| `total_statistics_all_products` | `products/*/proof.yaml` | `statistics` | array_length_sum |
