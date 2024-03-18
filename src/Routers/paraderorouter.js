const express = require('express');
const paraderocontroller = require('../Controllers/paraderocontroller');
const router = express.Router();

router.post('/crearparadero', paraderocontroller.crearParadero);
router.get('/listarparadero', paraderocontroller.listarParadero);
router.put('/actualizarparadero/:paraderoId', paraderocontroller.actualizarParadero);
router.put('/deshabilitarparadero/:paraderoId', paraderocontroller.deshabilitarParadero);
router.put('/habilitarparadero/:paraderoId', paraderocontroller.habilitarParadero);

module.exports = router;