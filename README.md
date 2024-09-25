# Little Cash

**Little Cash** é um projeto de estudo que visa desenvolver uma aplicação completa de sistema de Ponto de Venda (PDV). O projeto utiliza **NestJS** com **GraphQL** para o backend e **Next.js** para o frontend, abrangendo desde a autenticação até o controle de estoque e vendas.

## Funcionalidades

- **Autenticação**: Sistema de login para acesso seguro.
- **Controle de Estoque**: Gerenciamento de produtos, quantidades e categorias.
- **Vendas**: Processamento de vendas e geração de relatórios.
- **Cadastro de Produtos**: Interface para adicionar, editar e remover produtos.

## Tecnologias Utilizadas

- **Backend**:

  - [NestJS](https://nestjs.com/)
  - [GraphQL](https://graphql.org/)
  - [TypeORM](https://typeorm.io/) (ou outra biblioteca ORM)
  - [PostgreSQL](https://www.postgresql.org/) (ou outro banco de dados)

- **Frontend**:
  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [TailwindCSS](https://tailwindcss.com/) (ou outra biblioteca de estilos)
  - [Apollo Client](https://www.apollographql.com/docs/react/) para gerenciamento de estado e consumo de GraphQL.

## Diagrama Entidade-Relacionamento (MER)

![Diagrama MER](./database/mer.png)

## Diagrama de Sequência

![Diagrama de Sequência](./diagrams/sequence_diagram.png)

## Instruções para Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/little_cash.git
   cd little_cash
   ```
2. Backend:

- Navegue até a pasta do backend:

  ```bash
  cd backend
  ```
- Instale as dependências:

  ```bash
  npm install
  ```
- Inicie o servidor:

  ```bash
  npm run start:dev
  ```

3.  Frontend:

- Navegue até a pasta do frontend:

  ```bash
  cd frontend
  ```
- Instale as dependências:

  ```bash
  npm install
  ```
- Inicie o servidor:

  ```bash
  npm run dev
  ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

- **Nome**: Leonardo Reis Melo
- **Email**: leonardoreismeelo@outlook.com
