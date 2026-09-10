"""site/assistir/series.json é o produto do player e é editado à mão: este teste é o gate que faltava (06/09/2026).

Confere estrutura, arquivos de capa, uids do Stream, temporadas sem episódio (quebram a página do título) e os
links de indicação da Hostinger (têm que carregar REFERRALCODE e referral_id; nunca encurtar nem alterar).
Rodar: python3 -m unittest discover -s tests -v
"""
import json, re, unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSISTIR = ROOT / "site" / "assistir"
UID = re.compile(r"^[0-9a-f]{32}$")
URL = re.compile(r"^https://[^\s\"'<>]+$")
CUSTOMER = re.compile(r"^customer-[a-z0-9]+$")
# Checkout mensal autorizado pelo Zé para a aula do modo fácil, sem indicação.
HERMES_MENSAL = "https://cart.hostinger.com/pay/372b8772-33cd-44db-80db-f56d2a107ab7"


class Series(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.data = json.loads((ASSISTIR / "series.json").read_text(encoding="utf-8"))

    def test_series_e_slugs(self):
        series = self.data.get("series")
        self.assertIsInstance(series, list)
        self.assertTrue(series, "series.json sem série")
        slugs = [s["slug"] for s in series]
        self.assertEqual(len(slugs), len(set(slugs)), "slug repetido")
        for s in series:
            for k in ("slug", "name", "cover", "cover_wide", "seasons"):
                self.assertIn(k, s, f"{s.get('slug')}: falta {k}")
            self.assertRegex(s["slug"], r"^[a-z0-9-]+$")
            if "em_breve" in s:
                self.assertIsInstance(s["em_breve"], bool)
            if any(se.get("eps") for se in s["seasons"]):
                self.assertRegex(s["customer"], CUSTOMER)
            for c in [s["cover"], s["cover_wide"]] + ([s["cover_mobile"]] if s.get("cover_mobile") else []):
                self.assertTrue((ASSISTIR / c).is_file(), f"{s['slug']}: capa não existe: {c}")

    def test_temporadas_e_episodios(self):
        for s in self.data["series"]:
            self.assertTrue(s["seasons"], f"{s['slug']}: sem temporada")
            ns = [se["n"] for se in s["seasons"]]
            self.assertEqual(ns, sorted(set(ns)), f"{s['slug']}: temporadas fora de ordem ou repetidas")
            uids = []
            for se in s["seasons"]:
                self.assertIn("title", se, f"{s['slug']} T{se.get('n')}: sem título")
                self.assertIsInstance(se.get("eps"), list)
                self.assertTrue(s.get("em_breve") is True or se.get("eps") or se.get("atividades"), f"{s['slug']} T{se['n']}: temporada sem episódio quebra a página do título")
                for activity in se.get("atividades", []):
                    self.assertEqual(activity["tipo"], "simulacao")
                    self.assertGreater(activity["n"], 0)
                    self.assertTrue((ASSISTIR / activity["url"] / "index.html").is_file())
                    self.assertNotIn("uid", activity)
                for e in se["eps"]:
                    for k in ("t", "d", "uid", "desc"):
                        self.assertIn(k, e, f"{s['slug']} T{se['n']}: episódio sem {k}: {e.get('t')}")
                    self.assertIsInstance(e["d"], (int, float))
                    self.assertGreater(e["d"], 0, f"{e['t']}: duração zero")
                    self.assertRegex(e["uid"], UID, f"{e['t']}: uid não é o do Stream")
                    if "stream_uid" in e:
                        self.assertRegex(e["stream_uid"], UID, f"{e['t']}: revisão de mídia inválida")
                    uids.append(e["uid"])
                    if e.get("preplay") is not None:
                        self.assertIsInstance(e["preplay"].get("req"), list, f"{e['t']}: preplay.req tem que ser lista")
                        for r in e["preplay"]["req"]:
                            self.assertIsInstance(r.get("t"), str, f"{e['t']}: item do preplay sem texto em t (t é o texto, não o segundo)")
                            self.assertIn(type(r.get("need", False)), (bool,), f"{e['t']}: preplay.need tem que ser booleano")
                            if r.get("acao") is not None:
                                self.assertIsInstance(r["acao"], int, f"{e['t']}: preplay.acao é o índice do capítulo")
                                self.assertTrue(0 <= r["acao"] < len(e.get("ch") or []), f"{e['t']}: preplay.acao aponta para capítulo inexistente")
                                self.assertTrue((e["ch"][r["acao"]].get("acao") or {}).get("parar"), f"{e['t']}: preplay.acao tem que apontar para uma parada")
            self.assertEqual(len(uids), len(set(uids)), f"{s['slug']}: uid repetido")

    def test_capitulos_e_links_de_indicacao(self):
        for s in self.data["series"]:
            for se in s["seasons"]:
                for e in se["eps"]:
                    for c in e.get("ch", []):
                        self.assertIn("t", c); self.assertIn("n", c)
                        self.assertLess(c["t"], e["d"], f"{e['t']}: capítulo depois do fim")
                        if (c.get("acao") or {}).get("pausar_em") is not None:
                            self.assertGreater(c["acao"]["pausar_em"], c["t"], f"{e['t']}: pausar_em antes do capítulo")
                        a = c.get("acao") or {}
                        if a.get("parar") and a.get("tipo") == "comando":
                            self.assertTrue(a.get("texto"), f"{e['t']}: parada de prompt sem texto")
                        elif a.get("parar") and a.get("tipo") == "videos":
                            vids = a.get("videos") or []
                            self.assertTrue(vids, f"{e['t']}: parada de vídeos sem vídeos")
                            for v in vids:
                                self.assertRegex(v["uid"], UID, f"{e['t']}: vídeo do insert sem uid do Stream")
                        elif a.get("parar") and a.get("tipo") == "passo":
                            self.assertTrue(a.get("titulo") or c.get("n"), f"{e['t']}: parada de passo sem título")
                        elif a.get("parar"):
                            self.assertTrue(a.get("opcoes"), f"{e['t']}: parada de compra sem opções")
                        for o in a.get("opcoes", []):
                            self.assertRegex(o["url"], URL, f"{e['t']}: url inválida")
                            if o["url"] == HERMES_MENSAL:
                                self.assertIs(a.get("indicacao"), False, f"{e['t']}: checkout mensal não é link de indicação")
                            elif "hostinger" in o["url"]:
                                self.assertIn("REFERRALCODE=JOSEAMORIM20", o["url"], f"{e['t']}: link da Hostinger sem o código de indicação")
                                self.assertIn("referral_id=", o["url"], f"{e['t']}: link da Hostinger sem referral_id")

    def test_operacao_t1e2_partes(self):
        series = next(s for s in self.data['series'] if s['slug'] == 'hermes-em-operacao')
        episode = next(e for e in series['seasons'][0]['eps'] if e.get('n') == 2)
        expected = [(297,938,'pratica.html'),(1614,2127,'equipe.html'),(2298,3036,'eugencia-pratica.html'),(3544,4208,'cliente-pratica.html'),(7029,7157,'base-negocio.html')]
        self.assertEqual(len(episode['partes']), 5)
        stops = [c for c in episode['ch'] if c.get('acao', {}).get('fim_parte')]
        self.assertEqual(len(stops), 5)
        elapsed = 0
        for i, ((start, end, file), part, stop) in enumerate(zip(expected, episode['partes'], stops), 1):
            self.assertEqual((part['source_start'], part['source_end']), (start, end))
            self.assertEqual(part['start'], elapsed)
            elapsed += end - start
            self.assertEqual(part['end'], elapsed)
            self.assertAlmostEqual(stop['t'], elapsed, delta=.05)
            action = stop['acao']
            self.assertTrue(action['parar'])
            self.assertEqual(action['tipo'], 'link')
            self.assertEqual(action['opcoes'][0]['url'], 'https://agentsflix.ai/assistir/hermes-em-operacao/t1e2/' + file)
            self.assertEqual(action.get('encerrar', False), i == 5)
            if i < 5: self.assertEqual(action['continuar_em'], elapsed)
        self.assertAlmostEqual(episode['d'], 2684, delta=.1)

    def test_aula_ramificada(self):
        """escolha aponta para temporadas existentes; temporada de caminho tem rótulo; depois aponta para temporada existente."""
        for s in self.data["series"]:
            ns = {int(se["n"]) for se in s["seasons"]}
            for se in s["seasons"]:
                if "caminho" in se:
                    self.assertIsInstance(se["caminho"], str); self.assertTrue(se["caminho"].strip(), f"{s['slug']} T{se['n']}: caminho vazio")
                if "depois" in se:
                    self.assertIn(int(se["depois"]), ns, f"{s['slug']} T{se['n']}: depois aponta para temporada inexistente")
                    self.assertNotEqual(int(se["depois"]), int(se["n"]))
                for e in se["eps"]:
                    ch = e.get("escolha")
                    if ch is None:
                        continue
                    self.assertTrue(ch.get("pergunta"), f"{e['t']}: escolha sem pergunta")
                    ops = ch.get("opcoes") or []
                    self.assertTrue(2 <= len(ops) <= 4, f"{e['t']}: escolha precisa de 2 a 4 opções")
                    self.assertTrue(any(not o.get("em_breve") for o in ops), f"{e['t']}: escolha só com opções em breve")
                    for o in ops:
                        self.assertTrue(o.get("label"), f"{e['t']}: opção sem label")
                        if o.get("em_breve"):
                            continue
                        self.assertIn(int(o["temporada"]), ns, f"{e['t']}: opção aponta para temporada inexistente")
                        target = next(t for t in s["seasons"] if int(t["n"]) == int(o["temporada"]))
                        number = o.get("episodio", 1)
                        self.assertIs(type(number), int, f"{e['t']}: episodio deve ser inteiro")
                        self.assertTrue(1 <= number <= len(target["eps"]), f"{e['t']}: opção aponta para episódio inexistente")
                        self.assertNotEqual(target["eps"][number - 1]["uid"], e["uid"], f"{e['t']}: opção aponta para o próprio episódio")
                    if "t" in ch:
                        self.assertLess(ch["t"], e["d"], f"{e['t']}: escolha.t depois do fim do episódio")
                    if "tempo" in ch:
                        self.assertGreater(ch["tempo"], 0)


if __name__ == "__main__":
    unittest.main()
