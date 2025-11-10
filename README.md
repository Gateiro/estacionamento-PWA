# 🅿️ PWA Gestor de Estacionamento em Tempo Real

![Status: Concluído](https://img.shields.io/badge/status-conclu%C3%ADdo-green)
![Tecnologia: React](https://img.shields.io/badge/React-19-blue?logo=react)
![Backend: Firebase](https://img.shields.io/badge/Firebase-B.1.0-orange?logo=firebase)
![Estilo: TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-blueviolet?logo=tailwindcss)

### 🚀 [Clique aqui para ver a aplicação ao vivo!](https://estacionamento-pwa-f1699.web.app)

---

## 🔑 Acesso à Demonstração (Demo)

Para testar a aplicação, utilize as seguintes credenciais de teste (criadas no Firebase Auth):

* **E-mail:** `teste@estacionamento.com`
* **Senha:** `123456`
---

Este projeto é uma Aplicação Web Progressiva (PWA) completa para gerir a ocupação de vagas de um estacionamento em tempo real. A aplicação é protegida por autenticação, permitindo que apenas funcionários autorizados alterem o estado das vagas.

### Screenshots da Aplicação

| Página de Login |
| <img width="1509" height="756" alt="image" src="https://github.com/user-attachments/assets/eb9c7363-3549-484f-a969-4ff0561225a9" /> | 
| Painel de Vagas |
|<img width="1575" height="701" alt="image" src="https://github.com/user-attachments/assets/9caf38b1-c8ab-4b1f-b9dc-b1e78d9015b6" /> |

---

## ✨ Funcionalidades Principais

* **Autenticação Segura:** Sistema completo de Login (`/`) e Logout, utilizando **Firebase Authentication**.
* **Rotas Protegidas:** A página principal (`/home`) não pode ser acedida sem um login válido, redirecionando automaticamente para a página de login.
* **Gestão em Tempo Real:** Utiliza o **Firebase Realtime Database** para sincronizar o estado das vagas. Qualquer alteração feita por um funcionário é refletida instantaneamente em todos os outros dispositivos conectados.
* **Interface Reativa:** Construído com **React** (usando Hooks como `useState`, `useEffect`) para uma interface de utilizador rápida e moderna.
* **Design Responsivo (Mobile-First):** Criado com **Tailwind CSS** e **DaisyUI**, garantindo uma ótima aparência em desktops e telemóveis.
* **Tema Claro/Escuro:** Inclui um seletor de tema (`ThemeToggle`) funcional.
* **Progressive Web App (PWA):** Configurado com `vite-plugin-pwa`, permitindo que a aplicação seja "instalada" no dispositivo do utilizador (desktop ou telemóvel) e funcione com um Service Worker.

## 🚀 Tecnologias Utilizadas

Esta é uma aplicação "JAMstack" moderna, separando o front-end (Vite/React) dos serviços de backend (Firebase).

* **Front-end:** [React](https://reactjs.org/) (com [Vite](https://vitejs.dev/))
* **Backend & Base de Dados:** [Firebase](https://firebase.google.com/)
    * **Realtime Database:** Para o estado das vagas.
    * **Authentication:** Para login de utilizadores.
    * **Hosting:** Para o deploy e publicação do site.
* **Roteamento:** [React Router](https://reactrouter.com/) (v6.4+ com `createBrowserRouter`)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
* **Hooks de Estado (Firebase):** `react-firebase-hooks` (para monitorizar o `useAuthState` em tempo real).

📄 Licença
Este projeto é distribuído sob a licença MIT.
