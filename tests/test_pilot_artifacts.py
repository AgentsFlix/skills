"""Pilotos com dados sintéticos e rede bloqueada, sem contas ou memórias reais."""
import contextlib
import datetime as dt
import importlib.util
import io
import json
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

import yaml

ROOT = Path(__file__).resolve().parents[1]


class PilotArtifactTests(unittest.TestCase):
    def test_ads_produces_recommendations_without_human_decisions(self):
        package = ROOT / 'skills/ads-otimizar'
        spec = importlib.util.spec_from_file_location('pilot_motor', package / 'scripts/otimizar.py')
        motor = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(motor)
        rules = dict(impressoes_minimas=100, escalar_cac_max=50, matar_cac_min=100,
                     matar_gasto_sem_venda=100, fadiga_freq=3)
        campaigns = [dict(id='synthetic-a', name='Exemplo sintético', effective_status='ACTIVE')]
        current = dict(campaign_id='synthetic-a', spend='300', impressions='1000', frequency='1',
                       ctr='1', actions=[dict(action_type='purchase', value='2')])
        calls = []

        def fake_page(endpoint, query, auth):
            calls.append(endpoint)
            self.assertEqual(auth, 'synthetic-test-value')
            if endpoint.endswith('/campaigns'):
                return campaigns
            if endpoint.endswith('/adsets'):
                return []
            if endpoint.endswith('/insights'):
                return [current]
            self.fail('Endpoint não previsto no teste: ' + endpoint)

        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            briefing = root / 'briefing.yaml'
            briefing.write_text(yaml.safe_dump(dict(produto='synthetic', conta_anuncios='act_synthetic',
                                                    tipo_conversao='venda', matriz=rules, ratificado=True)))
            out = root / 'state'
            argv = ['otimizar.py', '--briefing', str(briefing), '--estado', str(out), '--json']
            with patch.object(motor.meta_api, 'credencial', return_value='synthetic-test-value'), \
                 patch.object(motor.meta_api, 'paginado', side_effect=fake_page), \
                 patch('urllib.request.urlopen', side_effect=AssertionError('Rede proibida neste teste')), \
                 patch.object(sys, 'argv', argv), contextlib.redirect_stdout(io.StringIO()) as stdout:
                motor.main()
            report = json.loads(stdout.getvalue())
            row = report['linhas'][0]
            self.assertEqual(row['cac'], 150)
            self.assertEqual(row['veredito'], 'MATAR')
            self.assertNotIn('problema é a OFERTA', row['motivo'])
            self.assertEqual(report['janela_atual'], motor.janelas(dt.date.today())[0])
            self.assertEqual(len(calls), 4)
            self.assertTrue((out / 'synthetic-recomendacoes.csv').is_file())
            self.assertFalse((out / 'synthetic-decisoes.csv').exists())
            saved = json.loads(next(out.glob('*.json')).read_text())
            self.assertEqual(saved, report)

    def test_icp_empty_template_does_not_claim_answers(self):
        package = ROOT / 'skills/hybrid-icp'
        template = yaml.safe_load((package / 'templates/company-icp.yaml').read_text())
        fields = json.loads((package / 'references/campos-icp.json').read_text())['required_paths']
        self.assertEqual(len(fields), len(set(fields)))
        self.assertEqual(template['metadata']['required_fields_total'], len(fields))
        for field in fields:
            group, name = field.split('.')
            self.assertIsNone(template[group][name], field)
        # Uma correção humana preenche só seu campo; os demais continuam desconhecidos.
        template['core_icp']['one_sentence_definition'] = 'Estúdios de design independentes (fixture sintética)'
        filled = [f for f in fields if template[f.split('.')[0]][f.split('.')[1]] is not None]
        self.assertEqual(filled, ['core_icp.one_sentence_definition'])


if __name__ == '__main__':
    unittest.main()
