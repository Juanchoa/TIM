const express = require('express');
const rutaparaderocontroller = require('../Controllers/rutaparaderocontroller');
const router = express.Router();

router.post('/crearrutaparadero', rutaparaderocontroller.crearRutaParadero);
router.get('/listarrutaparadero/:rutaId',rutaparaderocontroller.listarRutaParadero);
router.put('/editarrutaparadero/:rutaId',rutaparaderocontroller.editarRutaParadero);
router.put('/deshabilitarrutaparadero/:rutaparaderoId',rutaparaderocontroller.deshabiltarRutaParadero);
router.put('/habilitarrutaparadero/:rutaparaderoId',rutaparaderocontroller.habilitarRutaParadero);

module.exports = router;