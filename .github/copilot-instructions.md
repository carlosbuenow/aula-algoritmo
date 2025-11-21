<!-- Instruções para agentes de codificação (AI) que vão trabalhar neste repositório -->

# Copilot / Agente: Guia rápido para `aula-algoritmo`

Resumo curto: este repositório contém exercícios em JavaScript organizados por tópicos (`array/`, `lista-*`, `pa-assincrona/`, `array/exemplos/`, etc.). A maior parte dos arquivos são scripts didáticos (exercícios) que usam `console.log` e `readline-sync` para entrada/saída.

Principais diretórios (o que você precisa saber):
- `array/` — exemplos e exercícios sobre arrays (ex.: `array/exemplos/parte-1/ex1.js`).
- `lista-*` — séries de exercícios (ex.: `lista-1/exercicio1.js`).
- `pa-assincrona/` — exercícios que exploram controle de fluxo e laços.
- `array/intermediario/` — exercícios de nível intermediário.

Big picture / arquitetura mental:
- Não há backend, build system ou testes automatizados — são scripts standalone em JavaScript.
- Comunicação entre arquivos é mínima; cada arquivo normalmente é um exercício independente e executável.
- Dependências externas: apenas `readline-sync` (ver `package.json`).

Como executar/desenvolver localmente:
- Instale dependências: `npm install`.
- Muitos arquivos usam sintaxe ES Modules (`import ...`). Se `node` reclamar de `import`:
  - preferência simples: adicione `"type": "module"` em `package.json` temporariamente para executar com `node`.
  - alternativa: converta somente o arquivo alvo para `require()` antes de executar.
- Exemplo de execução (após `npm install`):
  - `node lista-1/exercicio1.js` (se `package.json` tiver `"type": "module"`) 

Padrões e convenções detectadas:
- Arquivos nomeados como `ex1.js`, `ex2.js` ou `exercicio1.js` representam tarefas isoladas; trate-os como unidades independentes.
- Entrada interativa: normalmente `import input from 'readline-sync'` e `input.question()`/`questionInt()`; saída por `console.log`.
- Estilo: código simples, top-level procedural. Evite refatorações em massa — altere localmente quando houver pedido claro.

Recomendações específicas para um agente AI:
- Evite mudanças globais não solicitadas: os alunos podem esperar que cada arquivo permaneça executável e com o mesmo I/O.
- Ao automatizar ou testar, extraia a lógica para funções puras e mantenha I/O separada. Exemplos: refatorar `lista-1/exercicio1.js` para `export function solve(input){...}` e criar um wrapper CLI pequeno.
- Ao criar PRs, inclua: descrição curta, arquivo(s) afetados, e notas sobre por que a mudança não altera o contrato I/O do exercício.

Padrões de integração e pontos de atenção:
- Dependência: `readline-sync` listado em `package.json`; assegure-se de `npm install` antes de execução.
- Se propuser adicionar testes automatizados, prefira adaptar exercícios para exportarem funções sem I/O e escrever testes sobre essas funções.

Arquivos-chave para referência ao trabalhar aqui:
- `lista-1/exercicio1.js` — mostra `readline-sync` e I/O padrão.
- `array/exemplos/parte-1/ex1.js` — exemplo simples de array e `console.log`.
- `pa-assincrona/` — bom local para revisar padrões de controle de fluxo usados pelos exercícios.

O que NÃO fazer sem pedir:
- Não converter todos os `import` em `require` ou vice-versa globalmente.
- Não reorganizar pastas/nomes de arquivos dos exercícios sem sinalização clara do mantenedor.

Se precisar de mais contexto ou quiser que eu adapte o repositório (ex.: adicionar `type: module`, configurar um runner de testes, ou criar exemplos de refatoração com testes), peça e eu proponho mudanças seguras e incrementais.

Feedback: por favor indique se quer instruções mais opinativas (ex.: padrão de commit, lint, ou testes) e eu atualizo este arquivo.
