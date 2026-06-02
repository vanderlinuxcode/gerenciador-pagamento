# Payment Manager

Aplicação web desenvolvida com **React + Vite + CSS puro**, com o objetivo de gerenciar pagamentos de forma simples, organizada e didática.

Este projeto também foi estruturado para **ensino de desenvolvimento front-end**, abordando conceitos fundamentais como componentes, hooks e organização de código.

---

## Tecnologias Utilizadas

- React
- Vite
- JavaScript (ES6+)
- CSS puro
- Node.js 24 (ambiente de desenvolvimento)
- Git e GitHub

---

## 📁 Estrutura do Projeto
payment-manager/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── PaymentForm.jsx
│ │ ├── PaymentList.jsx
│ │ ├── PaymentItem.jsx
│ ├── hooks/
│ │ └── usePayments.js
│ ├── pages/
│ │ └── Home.jsx
│ ├── styles/
│ │ ├── global.css
│ │ ├── header.css
│ │ ├── form.css
│ │ ├── list.css
│ ├── App.jsx
│ ├── main.jsx
├── index.html
├── package.json
├── vite.config.js


---

## Conceitos Aplicados

- Componentização (separação de responsabilidades)
- Hooks do React:
  - `useState`
  - `useEffect`
- Custom Hook (`usePayments`)
- Manipulação de estado
- Persistência com `localStorage`
- Organização de projeto escalável

---

## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/2025-08-52/payment-manager.git
cd payment-manager
