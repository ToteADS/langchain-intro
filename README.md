# LangChain Intro

Estudos de introdução ao **LangChain** e **LangGraph** com TypeScript (pós-graduação UNIPDS).

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
