# CRUD de Policiais 🛡️

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](https://github.com/)

Sistema web para **cadastrar, listar e gerenciar policiais**, usando **Angular** no frontend e **Node.js + Express + MySQL** no backend.

---

## 🛠 Tecnologias

- **Frontend:** Angular, TypeScript, HTML, CSS  
- **Backend:** Node.js, Express, MySQL, bcrypt, CORS  

---

## ⚡ Funcionalidades

- Cadastro de policiais com validação de CPF  
- Hash seguro da matrícula  
- Listagem de policiais cadastrados  
- Redirecionamento automático do cadastro para a tabela  

---

## 🚀 Rodando o projeto

### Backend

1. Entre na pasta `backend`:

```bash
cd backend
```

2. Instale dependências:

```bash
npm install
```

3. Configure o `.env` com seu MySQL:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=123456
DB_NAME=cadastro_policiais
DB_PORT=3306
```

4. Crie a tabela `policiais`:

```sql
CREATE TABLE policiais (
  id INT AUTO_INCREMENT PRIMARY KEY,
  rg_civil VARCHAR(20) NOT NULL,
  rg_militar VARCHAR(20) NOT NULL,
  cpf CHAR(11) NOT NULL,
  data_nascimento DATE NOT NULL,
  matricula VARCHAR(255) NOT NULL,
  CONSTRAINT chk_cpf CHECK (CHAR_LENGTH(cpf) = 11)
);
```

5. Rode o servidor:

```bash
npm run dev
```

Servidor em `http://localhost:3016`

---

### Frontend

1. Entre na pasta `frontend`:

```bash
cd frontend
```

2. Instale dependências:

```bash
npm install
```

3. Rode o Angular:

```bash
ng serve
```

Frontend em `http://localhost:4200`

---

## 🔗 Rotas

- `/tabela-policiais` → Lista de policiais  
- `/cadastro` → Cadastro de novos policiais  

---

## ✉️ Autor

**Antônio da Silva Pagliacci**  
contato.antoniopagliacci@gmail.com | (21) 98262-8025

