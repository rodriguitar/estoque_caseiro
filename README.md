# 🏠 Sistema de Estoque Caseiro

Um sistema de controle de estoque doméstico desenvolvido para auxiliar no gerenciamento de alimentos e produtos da casa.

Este projeto faz parte da minha jornada de aprendizado em **Desenvolvimento de Software**, evoluindo de uma aplicação simples para uma **API REST utilizando Node.js e Express**.

> 🚧 **Status: Em desenvolvimento**

---

## 🎯 Objetivo

O objetivo do projeto é resolver um problema real: controlar os produtos disponíveis em casa, acompanhar o consumo e identificar quais itens precisam ser repostos.

Além de resolver esse problema, o projeto funciona como um laboratório prático para estudar conceitos e tecnologias utilizados no desenvolvimento de software.

---

## 🚀 Tecnologias

* JavaScript
* Node.js
* Express
* Git
* GitHub
* Prisma ORM *(próxima etapa)*
* PostgreSQL *(próxima etapa)*

---

## 🏗️ Arquitetura

O projeto está sendo desenvolvido utilizando uma **arquitetura em camadas**, separando as responsabilidades da aplicação.

```text
Cliente
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
Prisma ORM
   ↓
PostgreSQL
```

Atualmente, a aplicação já possui as camadas de **Routes, Controllers e Services**. A integração com Prisma e PostgreSQL será implementada nas próximas etapas.

### Responsabilidades

**Routes**

* Define os endpoints da API.
* Determina qual controller deve tratar cada requisição.

**Controllers**

* Recebem as requisições HTTP.
* Extraem os dados enviados pelo cliente.
* Chamam os serviços responsáveis pela operação.
* Retornam a resposta HTTP.

**Services**

* Contêm as regras de negócio da aplicação.
* Processam os dados recebidos pelos controllers.
* Futuramente serão responsáveis por utilizar o Prisma para persistir e consultar os dados.

---

## 📂 Estrutura atual do projeto

```text
src/
├── app.js
│
├── controllers/
│   └── produtoController.js
│
├── routes/
│   └── produtoRoutes.js
│
└── services/
    └── produtoService.js
```

---

## ✅ Funcionalidades atuais

* [x] Estrutura inicial da API
* [x] Servidor HTTP com Express
* [x] Rota para cadastro de produtos
* [x] Rota para listagem de produtos
* [x] Controllers
* [x] Services
* [x] Separação de responsabilidades entre camadas
* [x] Comunicação entre módulos utilizando `require` e `module.exports`

---

## 🔄 Próximas etapas

### Backend

* [ ] Conectar Prisma ORM
* [ ] Configurar PostgreSQL
* [ ] Criar modelo de produto
* [ ] Persistir produtos no banco de dados
* [ ] Implementar atualização de produtos
* [ ] Implementar exclusão de produtos
* [ ] Implementar validação de dados
* [ ] Criar controle de estoque
* [ ] Registrar consumo de produtos
* [ ] Criar lista automática de compras
* [ ] Implementar tratamento de erros
* [ ] Criar testes automatizados

### Frontend

* [ ] Criar interface web com React
* [ ] Conectar frontend à API
* [ ] Criar dashboard de estoque
* [ ] Exibir produtos com estoque baixo
* [ ] Criar interface para registrar consumo

---

## 📚 Objetivos de aprendizado

Durante o desenvolvimento deste projeto, estou praticando:

* JavaScript
* Node.js
* Express
* APIs REST
* Arquitetura em camadas
* Modularização do código
* `require` e `module.exports`
* Git e GitHub
* Banco de dados relacionais
* Prisma ORM
* PostgreSQL
* Boas práticas de desenvolvimento
* Organização e manutenção de projetos

---

## 🧠 Evolução do projeto

O projeto está sendo desenvolvido de forma incremental.

A ideia é começar com uma implementação simples e evoluir gradualmente para uma aplicação mais próxima de um sistema utilizado em um ambiente profissional.

```text
Aplicação inicial
       ↓
Node.js
       ↓
Express
       ↓
API REST
       ↓
Arquitetura em camadas
       ↓
Prisma
       ↓
PostgreSQL
       ↓
Testes
       ↓
React
       ↓
Aplicação completa
```

Essa abordagem permite acompanhar não apenas o resultado final, mas também a evolução das habilidades utilizadas durante o desenvolvimento.

---

## 👨‍💻 Autor

Desenvolvido por **Rodrigo** como projeto de estudos e portfólio durante minha transição para a área de Desenvolvimento de Software.
