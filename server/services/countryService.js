const axios = require('axios'); // Importar axios para hacer peticiones HTTP
const Country = require('../models/Country'); // Importar el modelo Country

// Función para obtener los países desde la API y guardarlos en la base de datos
async function fetchAndSaveCountries() {
  const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,region,flags');
  const countries = response.data; // Obtener los datos de los países

  for (const c of countries) { // Iterar sobre cada país
    await Country.create({ // Crear un nuevo registro en la base de datos
      name: c.name?.common || 'N/A', // Usar el parametro del país, si no existe usar 'N/A'
      capital: c.capital?.[0] || 'N/A', 
      region: c.region || 'N/A',
      flagUrl: c.flags?.png || ''
    });
  }

  return 'Paises guardados correctamente en la base de datos';
}

async function getAllCountries() { // Función para obtener todos los países de la base de datos
  return Country.findAll({ order: [['name', 'ASC']] }); // Obtener todos los países ordenados por nombre ascendente
}

// Exportar la función para usarla en otros módulos
module.exports = { fetchAndSaveCountries, getAllCountries };
