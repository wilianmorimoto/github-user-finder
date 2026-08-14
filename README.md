# GitHub Finder
Busca de perfis e repositórios de usuários do GitHub via API.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

[Ver projeto →](https://github-user-finder-lyart.vercel.app/)

---

<p align="center">
  <img src="./public/readme.png" alt="Brainwave AI Landing Page Screenshot" width="800">
</p>

---

### 🚀 Features

- **Consumo de API REST**: Integração direta com a API do GitHub utilizando a Fetch API. A escolha por requisições assíncronas garante que a interface não trave durante a busca de dados.
- **Tipagem Estática**: Implementação de TypeScript para tipar as respostas da API e as props dos componentes, eliminando erros comuns de "undefined" em tempo de execução.
- **Roteamento Dinâmico**: Uso de `react-router-dom` para gerenciar a navegação. A implementação de rotas parametrizadas (`/repos/:login`) permite que a aplicação identifique qual usuário carregar com base na URL.
- **Estilização Modular**: Adoção de CSS Modules para garantir que as classes de estilo sejam locais a cada componente, evitando a poluição do escopo global e facilitando a manutenção.
- **Build Otimizado**: Utilização do Vite para o processo de build e desenvolvimento, proporcionando HMR (Hot Module Replacement) instantâneo e bundles finais mais leves.

---

### 🛠 Tecnologias

- **React** ^18.2.0
- **TypeScript** ^5.2.2
- **Vite** ^5.2.0
- **React Router DOM** ^6.23.1
- **React Icons** ^5.2.1

---

### 💻 Como rodar localmente

Este projeto utiliza o **pnpm** como gerenciador de pacotes.

1. Clone o repositório:
   ```bash
   git clone https://github.com/wilian-morimoto/github-finder.git
   cd github-finder
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```

4. Acesse no navegador:
   `http://localhost:5173`

---

### 📁 Estrutura de Pastas

```text
src/
├── components/  # Componentes de interface reutilizáveis (Search, User, Error)
├── routes/      # Páginas da aplicação e definição de fluxos (Home, Repos)
├── types/       # Definições de interfaces e tipos TypeScript
├── App.tsx      # Componente raiz e configuração de layout
└── main.tsx     # Ponto de entrada da aplicação
```
