const { DataTypes } = require('sequelize'); // Importar DataTypes de Sequelize
const sequelize = require('../config/db'); // Importar la instancia de Sequelize configurada

const Country = sequelize.define('Country', { // Definir el modelo Country
  name: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  capital: {
    type: DataTypes.STRING
  },
  region: {
    type: DataTypes.STRING
  },
  flagUrl: {
    type: DataTypes.STRING
  }
});

module.exports = Country;
