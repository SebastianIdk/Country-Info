const express = require('express'); // Importar express para manejar las rutas
const router = express.Router();
const { cargarPaises, listarPaises } = require('../controllers/countryController'); // Importar el controlador para manejar los países

// Definir la ruta para cargar los países (GET)
router.get('/importar', cargarPaises); // Ruta para importar países desde la API y guardarlos en la base de datos
router.get('/', listarPaises); // Ruta para listar todos los países desde la base de datos

// Exportar el router para usarlo en el servidor principal
module.exports = router;
