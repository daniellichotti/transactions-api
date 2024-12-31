# Transactions API

API backend feita utilizando o microframework de nodejs, Fastify e o knex para criar as queries para armazenar dados em um banco de dados sqlite3. Nele temos endpoints para POST e GET onde podemos registrar transações e lista-las. A aplicação cria um id de sessão a partir de cookies e só mostra as transações daquele usuário.

Query Parameters
  http://localhost:3333/transactions -> retorna toda as transações
  http://localhost:3333/summary -> retorna o summary das transações
Route Parameters
  GET http://localhost:3333/transactions/88a7824f-5bea-4a42-9b28-635c9f4f7c4b -> retorna uma transação específica
Request Body
  POST http://localhost:3333/transactions -> cria uma nova transação

Exemplo de body para o POST:
{
"title": "hamb",
"amount": 4000,
"type": "debit"
}

## Funcionalidades
- Cadastro, listagem e filtragem de transações.

## Pré-requisitos
- Node.js

## Instalação
1. Clone o repositório: 
  ```
  https://github.com/daniellichotti/transactions-api.git
  ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Rodar a aplicação:
   ```
   npm run dev
   ```
4. Rodar testes:
   ```
   npm run test
   ```

Se tudo foi feito corretamente ja sera possivel ver a aplicacao rodando e fazer requisições.

## Tecnologias
Node.js
Knex
SQLite3

## Contribuição
Contribuições são bem-vindas! Abra uma issue ou envie um pull request.

## Licença
- 

# RF
- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;
# RN
- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
- [x] Deve ser possível identificarmos o usuário entre as requisições;
- [x] O usuário só pode visualizar transações o qual ele criou;
