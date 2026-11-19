# 🏠 Sistema de Estoque Caseiro

API REST para controlar os produtos de casa (alimentos e itens do dia a dia), acompanhar o consumo e identificar o que precisa ser reposto.

> 🚧 **Status: em desenvolvimento.** Este é um projeto de estudo, e a versão atual cobre o cadastro e a listagem de produtos.

## Funcionalidades

- [x] Cadastro de produtos
- [x] Listagem de produtos
- [ ] Controle de quantidade e estoque ideal
- [ ] Lista automática de compras
- [ ] Persistência com PostgreSQL e Prisma ORM
- [ ] Validação de dados
- [ ] Testes automatizados

## Tecnologias

- JavaScript
- Node.js
- Express
- Git e GitHub

**Próximas etapas:** PostgreSQL e Prisma ORM.

## Arquitetura

O projeto está organizado em camadas, para separar responsabilidades:

```text
Cliente → Routes → Controllers → Services
```

- **Routes:** definem os endpoints e direcionam cada requisição ao controller certo.
- **Controllers:** recebem a requisição HTTP, extraem os dados e devolvem a resposta.
- **Services:** concentram as regras de negócio.

Estrutura atual:

```text
src/
├── app.js
├── controllers/
├── routes/
└── services/
```

## Como rodar

```bash
git clone https://github.com/rodriguitar/estoque_caseiro.git
cd estoque_caseiro
npm install
npm start
```

## Objetivo

Projeto para praticar JavaScript, APIs REST e arquitetura em camadas. Nas próximas etapas, a ideia é conectar um banco de dados relacional e evoluir o sistema para um frontend em React.
