# QA das artes dos assessments

Compare a `main` anterior e o candidato local com:

```sh
NODE_PATH=/caminho/para/node_modules node reviews/evidence/aprofundamento-assessment-art/qa.cjs
```

O teste registra antes/depois em 1440, 768 e 390 px e valida seis artes únicas, `alt`,
carregamento, dimensões e ausência de overflow ou erros de navegador.
