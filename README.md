# LangChain Intro

Projeto da aula **Introdução ao LangChain.js: Pipes, Fluxos Condicionais e Gerador de Apps**,
do módulo **APIs de IA Generativa e Prompt Engineering** da pós-graduação
**Engenharia de Software em IA Aplicada** da **UNIPDS**.

Estudos de **LangChain.js** e **LangGraph** com TypeScript: composição de pipes, fluxos
condicionais entre nós do grafo e geração de apps a partir de templates.

## Stack

- Node.js 24.11.1 (fixado em `.nvmrc`)
- TypeScript
- [LangGraph.js](https://langchain-ai.github.io/langgraphjs/) + `@langchain/core`
- LangSmith (tracing) e LangGraph Studio

## Estrutura

```
.
├── .nvmrc              # Node version (nvm)
├── .env.example        # LangSmith variables
└── langchainintro/     # LangGraph project (create-langgraph template)
    ├── src/agent/      # graph.ts + state.ts
    ├── tests/          # unit and integration tests (jest)
    └── langgraph.json  # graph registration for the LangGraph server
```

## Como rodar

```bash
nvm use                       # Node 24.11.1
cd langchainintro
cp ../.env.example .env       # fill in LANGSMITH_API_KEY
npm install
npx @langchain/langgraph-cli dev
```

O servidor sobe em `http://localhost:2024` e o grafo pode ser inspecionado no
[LangGraph Studio](https://smith.langchain.com/studio?baseUrl=http://localhost:2024).

## Testes

```bash
cd langchainintro
npm test          # unit
npm run test:int  # integration
npm run lint
```
