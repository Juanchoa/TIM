const express = require('express');
const vehiculocontroller = require('../Controllers/vehiculocontroller');
const router = express.Router();

router.post('/crearvehiculo',vehiculocontroller.crearVehiculo);
router.get('/listarvehiculo', vehiculocontroller.listarVehiculo);
router.put('/actualizarvehiculo/:placaVehiculo', vehiculocontroller.actualizarVehiculo);
router.put('/deshabilitarvehiculo/:placaVehiculo', vehiculocontroller.deshabilitarVehiculo);
router.put('/habilitarvehiculo/:placaVehiculo', vehiculocontroller.habilitarVehiculo);
router.get('/listarunvehiculo/:placaVehiculo', vehiculocontroller.listarUnVehiculo);

module.exports = router;