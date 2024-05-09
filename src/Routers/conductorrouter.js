const express = require('express');
const conductorcontroller = require('../Controllers/conductorcontroller');
const router = express.Router();

router.post('/crearconductor', conductorcontroller.crearConductor);
router.get('/listarconductor', conductorcontroller.listarConductor);
router.get('/listarunconductor/:conductorId', conductorcontroller.listarUnConductor);
router.put('/editarconductor/:conductorId', conductorcontroller.editarConductor);
router.put('/deshabilitarconductor/:conductorId', conductorcontroller.deshabiltarConductor);
router.put('/habilitarconductor/:conductorId', conductorcontroller.habilitarConductor);

module.exports = router;