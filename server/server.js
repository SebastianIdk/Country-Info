require('dotenv').config(); // Cargar variables de entorno
const express = require('express'); // Importar express para manejar las rutas
const app = express(); // Crear una instancia de express
const cors = require('cors');
app.use(cors());

const sequelize = require('./config/db'); // Importar la instancia de Sequelize configurada
const countryRoutes = require('./routes/countryRoutes'); // Importar las rutas de países

app.use(express.json()); // Middleware para parsear JSON
app.use('/api/paises', countryRoutes); // Usar las rutas de países bajo el prefijo /api/paises

app.listen(process.env.PORT, async () => {
  try {
    await sequelize.authenticate(); // Conectar a la base de datos
    console.log('Conectado a PostgreSQL');

    await sequelize.sync({ force: true }); // Sincronizar las tablas con la base de datos
    console.log('Tablas sincronizadas');

    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`); // Iniciar el servidor
  } catch (error) {
    console.error('Error al conectar la base de datos:', error);
  }
});
