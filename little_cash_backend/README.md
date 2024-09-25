# Sistema de Ponto de Venda (PDV)

## Descrição do Sistema

O sistema de PDV é uma aplicação web que permite que os comerciantes gerenciem vendas de produtos, controle de estoque, fluxo de caixa, cadastros de produtos e usuários, e geração de relatórios de vendas. O sistema será acessível via navegador e terá uma interface amigável para facilitar a operação no dia a dia.

## Funcionalidades Principais

### 1. Cadastro de Produtos

- **Descrição**: Permitir que os administradores cadastrem novos produtos, incluindo informações como nome, descrição, preço, quantidade em estoque, categoria e código de barras.
- **Requisitos**:
  - Formulário para adicionar/editar produtos.
  - Validação de campos obrigatórios.
  - Opção para importar produtos em massa via CSV.

### 2. Cadastro de Usuários

- **Descrição**: Permitir o cadastro de funcionários e seus níveis de acesso (administrador, vendedor, etc.).
- **Requisitos**:
  - Formulário de cadastro de usuário com informações como nome, e-mail, senha e função.
  - Sistema de autenticação e autorização.

### 3. Venda de Produtos

- **Descrição**: Realizar vendas, permitindo a adição de produtos ao carrinho, cálculo automático do total da compra e finalização da venda.
- **Requisitos**:
  - Interface de venda com pesquisa de produtos.
  - Cálculo automático do subtotal, impostos e total.
  - Opções de pagamento (dinheiro, cartão, etc.).
  - Impressão de recibo e geração de nota fiscal eletrônica (NF-e).

### 4. Controle de Estoque

- **Descrição**: Monitorar o estoque de produtos em tempo real, com alertas para produtos em falta ou com baixo estoque.
- **Requisitos**:
  - Exibição de níveis de estoque.
  - Atualização automática do estoque após vendas.
  - Relatórios de movimentação de estoque.

### 5. Fluxo de Caixa

- **Descrição**: Gerenciar entradas e saídas de dinheiro, com registro de cada transação.
- **Requisitos**:
  - Registro de vendas e retornos.
  - Relatórios de fluxo de caixa diário, semanal e mensal.

### 6. Relatórios de Vendas

- **Descrição**: Gerar relatórios detalhados de vendas, incluindo análises diárias, semanais e mensais.
- **Requisitos**:
  - Relatórios que mostrem vendas totais, produtos mais vendidos e comparativos de vendas por período.
  - Exportação de relatórios em formato CSV ou PDF.

## Tecnologias Recomendadas

- **Frontend**: Next.js para a construção da interface do usuário.
- **Backend**: NestJS para a criação da API RESTful.
- **Banco de Dados**: PostgreSQL ou MongoDB para armazenar dados de produtos, usuários e vendas.
- **Bibliotecas de UI**: Ant Design ou Material-UI para um design moderno e responsivo.
- **Geração de Nota Fiscal**: Utilizar bibliotecas específicas para a geração de NF-e (ex: nfe em Node.js).
- **Autenticação**: JSON Web Tokens (JWT) para autenticação de usuários.

## Arquitetura do Sistema

```plaintext
/src
  /modules
    /products
      - products.controller.ts
      - products.service.ts
      - products.module.ts
      - product.entity.ts (para ORM)
    /users
      - users.controller.ts
      - users.service.ts
      - users.module.ts
      - user.entity.ts
    /sales
      - sales.controller.ts
      - sales.service.ts
      - sales.module.ts
      - sale.entity.ts
    /inventory
      - inventory.controller.ts
      - inventory.service.ts
      - inventory.module.ts
      - inventory.entity.ts
    /reports
      - reports.controller.ts
      - reports.service.ts
      - reports.module.ts
      - report.entity.ts
  /database
    - database.module.ts
  /auth
    - auth.controller.ts
    - auth.service.ts
  - app.module.ts
  - main.ts
```

## Fluxo de Trabalho

### 1. Cadastro de Produtos
- O administrador acessa o módulo de produtos e preenche o formulário para adicionar novos produtos.

### 2. Venda de Produtos
- O vendedor acessa a interface de vendas, pesquisa e adiciona produtos ao carrinho.
- O sistema calcula o total e permite que o vendedor escolha o método de pagamento.
- A venda é registrada e o estoque é atualizado automaticamente.

### 3. Geração de Relatórios
- O administrador acessa o módulo de relatórios e seleciona o tipo de relatório desejado.
- O sistema gera o relatório e permite a exportação.

### 4. Controle de Estoque
- O administrador verifica os níveis de estoque e é alertado quando um produto está com estoque baixo.

### 5. Fluxo de Caixa
- O administrador visualiza o fluxo de caixa, que mostra entradas e saídas, permitindo uma análise financeira detalhada.

## Considerações Finais
Este sistema de PDV será uma solução robusta que permitirá que os comerciantes gerenciem suas vendas e estoque de forma eficiente, além de fornecer insights valiosos através de relatórios. A construção do sistema deve seguir princípios de Clean Architecture para garantir manutenibilidade e escalabilidade.

### Cores
 - 8ECAE6
 - 219EBC
 - 023047
 - FFB703
 - FB8500
 - FFFFFF
 - 000000
 - FF0000
