const { Sequelize } = require('sequelize'); // Importar Sequelize
require('dotenv').config(); // Cargar variables de entorno

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize( // Parámetros de conexión
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { // Configuración de la conexión
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    logging: false
  }
);

// Exportar la instancia de Sequelize para usarla en otros módulos
module.exports = sequelize;
