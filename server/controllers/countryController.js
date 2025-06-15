const { fetchAndSaveCountries, getAllCountries } = require('../services/countryService'); // Importar el servicio para manejar los países

// Controlador para manejar las peticiones relacionadas con los países
const cargarPaises = async (req, res) => {  // Función para cargar los países
  try {
    // Llamar al servicio para obtener y guardar los países
    const mensaje = await fetchAndSaveCountries();
    res.status(200).json({ mensaje });
  } catch (error) {
    console.error('Error al guardar países:', error);
    res.status(500).json({ error: 'Hubo un error al guardar los países' });
  }
};

const listarPaises = async (req, res) => { // Función para listar todos los países
  try { // Llamar al servicio para obtener todos los países
    const paises = await getAllCountries(); // Obtener todos los países desde la base de datos
    res.status(200).json(paises);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener países' });
  }
};

// Exportar el controlador para usarlo en las rutas
module.exports = { cargarPaises, listarPaises };
