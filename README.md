# 🌍 Country Info App

[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow.svg)](https://developer.mozilla.org/docs/Web/JavaScript)  
[![Express.js](https://img.shields.io/badge/Framework-Express.js-lightgrey.svg)](https://expressjs.com/)  
[![Node.js](https://img.shields.io/badge/Runtime-Node.js-green.svg)](https://nodejs.org/)  
[![Sequelize](https://img.shields.io/badge/ORM-Sequelize-blue.svg)](https://sequelize.org/)  
[![PostgreSQL](https://img.shields.io/badge/DB-PostgreSQL-blue.svg)](https://www.postgresql.org/)  
[![Axios](https://img.shields.io/badge/HTTP%20Client-Axios-007ACC.svg)](https://axios-http.com/)  
[![React](https://img.shields.io/badge/Frontend-React-blue.svg)](https://reactjs.org/)  

---

## 📖 Descripción

Una aplicación full-stack **JavaScript** que:

1. **Consume** datos de la API pública [REST Countries](https://restcountries.com/).  
2. **Persiste** la información en una base de datos **PostgreSQL** mediante **Sequelize**.  
3. **Expone** dos rutas en el backend:
   - `GET /api/paises/importar` → obtiene y guarda los países.
   - `GET /api/paises` → lista todos los países almacenados.  
4. **Muestra** los datos en un frontend React con **Material-UI** y animaciones con **Framer Motion**.

---

## 🚀 Tecnologías

| Capa              | Tecnología / Herramienta   |
|-------------------|----------------------------|
| **Lenguaje**      | JavaScript (ES6+)          |
| **Backend**       | Express.js + Node.js       |
| **ORM**           | Sequelize                  |
| **Base de Datos** | PostgreSQL                 |
| **HTTP Client**   | Axios                      |
| **Frontend**      | React + Material-UI        |
| **Animaciones**   | Framer Motion              |
| **Gestión Env.**  | dotenv                     |

---

## ⚙️ Instalación

1. Clona este repositorio y entra a la carpeta raíz:
   ```bash
   git clone https://github.com/tu-usuario/country-info-app.git
   cd country-info-app
   ```

2. **Backend**  
   ```bash
   cd server
   npm install
   ```

3. **Frontend**  
   ```bash
   cd ../client
   npm install
   ```

---

## 📝 Configurar variables de entorno

En el directorio `server/`, crea un archivo `.env` con:

```dotenv
PORT=3000
DB_NAME=nombre_de_tu_bd    # ← Puedes cambiar el nombre de la BD aquí
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=5432
```

> **Nota**: No es obligatorio llamar a tu base de datos `api_countries` – cambia `DB_NAME` al que prefieras, y Sequelize la usará automáticamente.

---

## 📡 Uso

### Backend

1. Arranca el servidor:
   ```bash
   cd server
   npm run dev
   ```
2. Prueba en Postman o con curl:
   - **Importar países**  
     ```bash
     GET http://localhost:3000/api/paises/importar
     ```
   - **Listar países**  
     ```bash
     GET http://localhost:3000/api/paises
     ```

### Frontend

1. En otra terminal, dentro de `client/`:
   ```bash
   npm start
   ```
2. Abre tu navegador en `http://localhost:3000` para ver la tabla interactiva.

---

## 🎨 Estructura de carpetas

```
country-info-app/
├─ server/             # Backend Node + Express
│  ├─ src/
│  │  ├─ config/       # Configuración Sequelize / DB
│  │  ├─ models/       # Modelos Sequelize
│  │  ├─ services/     # Lógica de negocio (API fetch + DB)
│  │  ├─ controllers/  # Endpoints Express
│  │  └─ routes/       # Rutas HTTP
│  ├─ .env
│  └─ server.js
└─ client/             # Frontend React + Material-UI
   ├─ public/
   └─ src/
      ├─ components/   # CountryList.jsx
   │  ├─ App.js
   │  └─ index.js
```

---

## 📚 Recursos

- [REST Countries API](https://restcountries.com/)  
- [Express.js Documentation](https://expressjs.com/)  
- [Sequelize Docs](https://sequelize.org/)  
- [PostgreSQL](https://www.postgresql.org/)  
- [Material-UI](https://mui.com/)  
- [Framer Motion](https://www.framer.com/motion/)  
