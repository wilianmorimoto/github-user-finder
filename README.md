# GitHub Finder

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

Uma aplicação web para busca de perfis de usuários do GitHub e visualização de seus repositórios públicos, consumindo a API oficial do GitHub.

## 🚀 Tecnologias

- **Frontend:** React 18
- **Linguagem:** TypeScript
- **Build Tool:** Vite
- **Roteamento:** React Router DOM
- **Estilização:** CSS Modules
- **Ícones:** React Icons

## ✨ Funcionalidades

- **Busca de Usuários:** Pesquisa em tempo real por qualquer username do GitHub.
- **Perfil Detalhado:** Exibição de informações essenciais como avatar, localização, número de seguidores e seguindo.
- **Listagem de Repositórios:** Página dedicada para listar os repositórios públicos do usuário selecionado.
- **Tratamento de Erros:** Implementação de estados de erro para usuários não encontrados (404).
- **Navegação Fluida:** Uso de rotas dinâmicas para transição entre a busca e a lista de repositórios.

## 🛠️ Instalação e Execução

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/github-finder.git
   cd github-finder
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   Abra `http://localhost:5173` (ou a porta indicada no terminal).

## 🧠 Decisões Técnicas e Boas Práticas

- **Tipagem Estrita:** Utilização de interfaces TypeScript (`UserProps`) para garantir a consistência dos dados recebidos da API e evitar erros de tempo de execução.
- **Modularização de Estilos:** Emprego de **CSS Modules** para evitar a colisão de classes globais e manter a manutenibilidade do layout.
- **Componentização:** Divisão da interface em componentes reutilizáveis (`Search`, `User`, `Error`), promovendo a separação de responsabilidades.
- **Consumo de API:** Implementação de chamadas assíncronas com `fetch` e tratamento de status de resposta para feedback preciso ao usuário.
- **Performance:** O uso do Vite garante um *Hot Module Replacement* (HMR) extremamente rápido e builds otimizados.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
