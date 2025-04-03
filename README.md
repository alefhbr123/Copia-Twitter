<h1 align="center">CopiaTweet</h1>
CopiaTweet é uma aplicação simples de microblog inspirada no Twitter, desenvolvida com React e Vite. A ideia é permitir que o usuário publique tweets, visualize uma lista de tweets publicados e acompanhe a contagem de caracteres em tempo real.

## 🔗Funcionalidades

- ✅**Publicar Tweets:** Permite digitar e enviar tweets com um limite de 125 caracteres.
- ✅**Contador de Caracteres:** Exibe a contagem de caracteres digitados, respeitando o limite máximo.
- ✅**Lista de Tweets:** Mostra os tweets publicados com informações como data, usuário e conteúdo.

## 🚀Tecnologias Utilizadas

- **React:** Biblioteca para construção de interfaces.
- **Vite:** Ferramenta de build rápida para aplicações web.
- **CSS Modules:** Estilização modular para os componentes.
- **date-fns:** Biblioteca para manipulação e formatação de datas.

## 📌Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) instalado

### 📦Instalação

## 1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/copia-tweet.git
   ```
## 2. **Acesse o diretório do projeto:**

```bash
cd copia-tweet
 ```

## 3. **Instale as dependências:**

```bash
npm install
```

ou, se preferir o Yarn:

```bash
yarn install
```
## 4. **Executando a Aplicação**
Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```
ou

```bash
yarn dev
```

Abra seu navegador e acesse a URL que aparecerá no terminal.

## 🏗Estrutura do Projeto
```text
├── README.md               
├── eslint.config.js        # Configuração do ESLint
├── index.html              # Arquivo HTML principal
├── package-lock.json       # Versões exatas das dependências
├── package.json            # Configuração do projeto e dependências
├── src/                    # Código fonte da aplicação
│   ├── App.jsx             # Componente raiz da aplicação
│   ├── App.module.css      # Estilos do componente App
│   ├── components/         # Componentes reutilizáveis
│   │   ├── TextInput.jsx   # Componente de input para tweets
│   │   ├── TextInput.module.css  # Estilos para o TextInput
│   │   ├── Tweet.jsx       # Componente para exibir um tweet
│   │   └── Tweet.module.css  # Estilos para o Tweet
│   ├── hooks/              # Hooks customizados
│   │   └── userIndex.page.js  # Hook para gerenciar a lógica da página principal
│   ├── index.css           # Estilos globais da aplicação
│   ├── main.jsx            # Ponto de entrada da aplicação
│   └── pages/              # Páginas da aplicação
│       ├── index.jsx       # Página principal
│       └── index.module.css  # Estilos específicos da página principal
└── vite.config.js          # Configuração do Vite para build e desenvolvimento
```
