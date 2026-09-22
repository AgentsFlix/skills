const cases = {
  triage: {title:'A coruja trouxe uma carta. Quem deve recebê-la?',input:'“Minha vassoura quebrou antes do treino. Quem pode me ajudar?”',task:'Encaminhar à equipe de Quadribol, Biblioteca, Enfermaria ou Outros.',parallel:'É o mesmo problema de encaminhar um chamado de suporte ao departamento certo.',best:'JEV'},
  write: {title:'O aluno precisa de uma resposta, não de uma categoria.',input:'“Estou nervoso com meu primeiro treino de voo.”',task:'Redigir uma resposta acolhedora com orientações previamente aprovadas pelo professor.',parallel:'É o equivalente a redigir uma resposta de atendimento. Uma pessoa confere fatos e tom antes do envio.',best:'LLM'},
  extract: {title:'Uma carta precisa virar uma ficha pesquisável.',input:'“Sou Lia, do 3º ano. Gostaria de reservar o livro de Herbologia para sexta.”',task:'Extrair nome, ano, pedido e dia em campos fixos, preservando informações ausentes como desconhecidas.',parallel:'É a extração de dados de um e-mail para um formulário. O esquema organiza; não verifica sozinho se os dados são verdadeiros.',best:'Structured'},
  exact: {title:'A visita tem uma condição explícita.',input:'Ficha do exemplo: ano = 3; autorização assinada = verdadeiro.',task:'Aplicar nossa regra didática: liberar a inscrição somente a partir do 3º ano e com autorização assinada.',parallel:'É a validação determinística de elegibilidade. Os dados precisam estar corretos antes do teste. A regra aqui é didática, não uma alegação sobre o cânone.',best:'Regra'}
};
const tools = [
  {key:'JEV',title:'JEV',tag:'Decidir entre opções',input:'Texto da carta + equipes permitidas + critérios de encaminhamento.',how:'Uma pergunta choice compara a necessidade descrita com as opções.',output:'Uma equipe, distribuição entre equipes e confidence. Execute o Chapéu ou a triagem abaixo para ver respostas reais.',limit:'Não redige a carta nem preenche campos de texto livre. Para regras numéricas exatas, use código.',source:'https://docs.typesafe.ai/primitives',sourceTitle:'TypeSafe · roteamento de chamados'},
  {key:'LLM',title:'LLM · texto livre',tag:'Escrever uma resposta',input:'Carta do aluno + instrução de tom + orientações aprovadas do professor.',how:'Gera uma resposta em linguagem natural, adaptada ao contexto.',output:'Exemplo escrito para ilustrar: “É normal ficar nervoso. No primeiro treino, siga a orientação do professor e peça ajuda quando precisar.”',limit:'Pode inventar fatos. Revise o conteúdo; não tente usar o texto livre como uma categoria garantida.',source:'https://openrouter.ai/docs/api/reference/overview',sourceTitle:'OpenRouter · geração de mensagens'},
  {key:'Structured',title:'LLM + Structured Output',tag:'Preencher uma ficha',input:'Carta sobre Herbologia + esquema com nome (texto), ano (número), pedido (texto), dia (texto ou nulo).',how:'Um LLM compatível extrai os dados dentro de um esquema de saída.',output:'Exemplo ilustrativo: {"nome":"Lia","ano":3,"pedido":"reservar livro de Herbologia","dia":"sexta"}. A data exata continua desconhecida.',limit:'Formato correto não garante interpretação correta. Suporte e rigor dependem do modelo/provedor. JEV não é necessário para apenas preencher a ficha.',source:'https://openrouter.ai/docs/guides/features/structured-outputs',sourceTitle:'OpenRouter · saída com JSON Schema'},
  {key:'Regra',title:'Regra simples',tag:'Conferir uma condição exata',input:'Ano escolar numérico + autorização booleana já conferidos.',how:'ano >= 3 && autorizacao === true',output:'No exemplo: verdadeiro. Se a autorização for falsa, o resultado será falso. Sem chamada a modelo.',limit:'Não entende o pedido numa carta livre. Uma condição exata já conhecida não precisa do JEV.',source:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else',sourceTitle:'MDN · condições em JavaScript'}
];
export const eligibleForVisit = (year, permission) => Number.isInteger(year) && year >= 3 && permission === true;
export function mountComparison(make) {
  const select=document.querySelector('#comparison-scenario');
  function render() {
    const scenario=cases[select.value], example=document.querySelector('#comparison-case');example.replaceChildren();
    example.append(make('p','step','APLICAÇÃO REAL, ANALOGIA FICTÍCIA'),make('h3','',scenario.title),make('blockquote','',scenario.input),make('p','',scenario.task),make('p','field-help',scenario.parallel));
    const container=document.querySelector('#comparison-cards');container.replaceChildren();
    for(const item of tools) {
      const card=make('article','comparison-card');card.dataset.recommended=String(item.key===scenario.best);
      card.append(make('p','comparison-fit',item.key===scenario.best ? 'PONTO DE PARTIDA PARA ESTE CASO' : item.tag),make('h3','',item.title));
      const list=make('dl');for(const [label,value] of [['Entrada',item.input],['O que faz',item.how],['Saída',item.output],['Quando não usar',item.limit]])list.append(make('dt','',label),make('dd','',value));card.append(list);
      const source=make('a','source-link',item.sourceTitle);source.href=item.source;card.append(source);container.append(card);
      if(item.key==='Regra') {
        const label=make('label','rule-toggle'),checkbox=make('input');checkbox.type='checkbox';checkbox.checked=true;
        const output=make('p','live-fact','Regra executada aqui: inscrição liberada.');
        label.append(checkbox,document.createTextNode('Autorização assinada (3º ano)'));card.append(label,output);
        checkbox.addEventListener('change',()=>{output.textContent='Regra executada aqui: '+(eligibleForVisit(3,checkbox.checked)?'inscrição liberada.':'inscrição não liberada.');});
      }
    }
  }
  select.addEventListener('change',render);render();
}
