**<p align="center">(Ainda em desenvolvimento - NÃO FINALIZADO)</p>**

<p align="center">
  <img src="https://raw.githubusercontent.com/georgaugusto/solouchuva/85adedbfe8c53a00d70f8e1ff746e8db709dfc8d/public/logoImg.svg" width="600px"/>
</p>

<p align="center">
  <a href="#Descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Preview">Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## Descrição
<p align="justify">
  Em consequência do constante crescimento do número de habitantes na Terra, haverá necessidade de aumentar significativamente a produção de alimentos, bem como combater as mais   variadas consequências desse crescimento, tais como as mudanças climáticas, a degradação do meio ambiente, a insegurança alimentar, a utilização de insumos de origem fóssil, o   aumento de doenças e a própria produtividade agrícola.
</p>
<p align="justify">
  Devido a esses problemas, a proposta desse trabalho é apresentar uma solução de baixo custo e simples utilização: Um protótipo de IoT para Smart Agriculture, com hardware       desenvolvido na placa NodeMCU, onde todos os dados coletados são enviados ao banco de dados na nuvem e, através desta, podem ser acessados em tempo real.  Tais dados serão       consumidos pela aplicação WebApp, desenvolvida no NodeJS e ReactJS, e, após, apresentados ao usuário.
</p>
<p align="justify">
  O protótipo supramencionado atua com foco no monitoramento meteorológico e é capaz de realizar previsões em tempo real, com mobilidade, e contemplando, ainda, a possibilidade   futura de que uma cultura desenvolva algum tipo de doença e a estimativa de produção e de crescimento por meio de deduções, a partir de dados, ações ou informações previamente   apresentadas, auxiliando, assim, a tomada de decisão do usuário.
</p>

Para ver a **describe**, clique aqui: [SolouChuva Describe](https://github.com/georgaugusto/solouchuva)</br>
Para ver a **web client**, clique aqui: [SolouChuva Web](https://github.com/georgaugusto/solouchuva-frontend)</br>
Para ver a **hardware**, clique aqui: [SolouChuva Hardware](https://github.com/georgaugusto/solouchuva-hardware)

Para ver a **aplicação** rodando, clique aqui: [SolouChuva App](https://app.solouchuva.com.br/dashboard)

## Preview

## Tecnologias

**Back-End:**
- [Node.js](https://nodejs.org/en/);
- [TypeScript](https://www.typescriptlang.org/);
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [Firebase Realtime](https://firebase.google.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)

**Padronização de código:**
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- Um projeto no [Firebase](https://console.firebase.google.com/)

> Obs.: Recomendo o uso do docker pela facilidade

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/georgaugusto/solouchuva-backend.git && cd solouchuva-backend
```

**Siga os passos abaixo**

```bash
# Instale as dependências
$ yarn install

# Faça uma cópia de '.env.example' para '.env' e defina com suas variáveis de ambiente.
# As variáveis aws não precisam ser preenchidas para o ambiente dev
$ cp .env.example .env

# Caso ainda não tenha crie um Realtime Database no console do Firebase

# Crie a instância do postgreSQL usando docker
$ docker run --name postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Crie a instância do mongoDB usando docker
$ docker run --name mongodb -p 27017:27017 -d -t mongo

# Crie a instância do redis usando docker
$ docker run --name redis -p 6379:6379 -d -t redis:alpine

# Faça uma cópia de 'ormconfig.example.json' para 'ormconfig.json'
# e defina os valores, se não forem preenchidos, para conectar com contêineres de banco de dados do docker
$ cp ormconfig.example.json ormconfig.json

# Assim que os serviços estiverem em execução, execute as migrações
$ yarn typeorm migration:run

# Para terminar, execute o serviço api
$ yarn dev:server
```

> Obs.: Importe o arquivo `Insomnia.json` no aplicativo Insomnia, para facilitar o teste da api

## Como contribuir

**Faça um fork deste repositório**

```bash
# Fork usando a linha de comando oficial do GitHub, caso você não tenha a CLI do GitHub, use o site para fazer isso.

$ gh repo fork georgaugusto/solouchuva-backend
```

**Siga os passos abaixo**

```bash
# Clone sua fork
$ git clone your-fork-url && cd solouchuva-backend

# Crie uma branch com suas alterações
$ git checkout -b my-feature

# Faça o commit com suas mudanças
$ git commit -m 'feat: My new feature'

# Envie o código para sua remote branch
$ git push origin my-feature
```

Depois que sua solicitação pull for merged, você pode excluir seu branch

## Licença

Este projeto está licenciado sob a Licença MIT - consulte a [LICENSE](LICENSE) arquivo para obter detalhes.

---

> A aplicação foi desenvolvida durante a graduação em Análise e Desenvolvimento de Sistemas na [FEMA](https://www.fema.edu.br) e em conjunto com o GoStack 11.0, organizado pela [Rocketseat](https://rocketseat.com.br/).

Feito com 💜 &nbsp;por Georg Augusto Schlegel 👋 &nbsp;[Mande um Aló](https://www.linkedin.com/in/georgaugusto/)
