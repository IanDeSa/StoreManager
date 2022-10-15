# Store Manager

Uma API que faz o gerenciamento de uma loja, com login de usuário, autenticação e um CRUD completo.


## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora fullstack jr, desenvolvo os meus projetos frontend com HTML, CSS, Javascript e React e no Backend com Node usando o Express e Typescript.

## Aprendizados

O desafio desse projeto foi fazer todas as requisições usando querys SQL, o javascript não suporta essas querys nativamente e configurar o driver do mySQL com as querys mais complexas foram um desafio.


## Stack utilizada

**Back-end:** Node, Express, Docker, Git, Javascript, MySQL e MSC - Model, Service, Controller.


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env
O projeto inclui um arquivo chamado '.env.exemple', edite o nome para '.env', o arquivo dotenv está incluído no .gitignore e não subirá para o repositório caso tenham modificações ou dados sensíveis.
O subir o arquivo .env para o repositório é uma má prática de segurança, o arquivo '.env.exemple' existe por fins educacionais e para o bom funcionamento do projeto com nomes e dados genéricos.

## Documentação
* Para instalação do [Docker](https://docs.docker.com/desktop/install/windows-install/) em sua máquina
* Para instalação do [Docker Compose](https://docs.docker.com/compose/install/)
* Para ver a imagem utilizada no projeto [MySQL](https://hub.docker.com/layers/library/mysql/5.7/images/sha256-4ff8da589a6dd1ff2323a50b409575cb5ca7d5dd1169783a911476c757ed48f5?context=explore)



## Instalação

Instale o meu projeto clonando do o repositório pela chave SSH.

```bash
  $ git clone git@github.com:IanDeSa/StoreManager.git
```
Entre na pasta do projeto e instale as dependências do projeto com npm.
```bash
  $ cd StoreManager
  $ npm install
```
O projeto usa docker e docker-compose, agora suba o container com o docker-compose
```bash
  $ docker-compose up -d
```
Para o bom funcionamento do projeto, instale as dependências dentro do container.
```bash
  $ docker exec -it blogs_api bash
  $ npm install
```
O uso de scripts via npm devem ser feitos dentro do container docker via bash.
Sempre que quiser acessar o bash do docker, o comando a seguir:
```bash
  $ docker exec -it store_manager bash
```

## Uso do Projeto
Para usar o projeto siga os passos:
* lembre de usar os scripts dentro do container

Criar o banco de dados e popular via migrations e seed.

```
$ npm migration
$ npm seed
```
Para iniciar o projeto.
```
$ npm start
```
## Rodando os testes

O projeto foi desenvolvido usando TDD, mas não foi incluído no projeto final. Caso novos testes unitários e de integração voltem a ser incluídos, o script para rodar testes é:

```bash
  npm run test
```

## Melhorias

O projeto está em construção, algumas possíveis melhorias são futuras implementações de outras rotas e mais possibilidades de buscas.
Outra melhoria é a inclusão de testes unitários e testes de intregração.
Projeto aberto para PR.

## Autor

- [@IanDeSa](https://github.com/IanDeSa)


## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio do email: contato.iansantos@gmail.com
