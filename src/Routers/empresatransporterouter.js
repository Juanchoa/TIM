const express = require('express');
const empresatransportecontroller = require('../Controllers/empresatransportecontroller');
const router = express.Router();

router.post('/crearempresatransporte', empresatransportecontroller.crearEmpresaTransporte);
router.get('/listarempresatransporte', empresatransportecontroller.listarEmpresaTransporte);
router.put('/editarempresatransporte/:empresaId', empresatransportecontroller.editarEmpresaTransporte);
router.put('/deshabilitarempresatransporte/:empresaId', empresatransportecontroller.deshabiltarEmpresaTransporte);
router.put('/habilitarempresatransporte/:empresaId', empresatransportecontroller.habilitarEmpresaTransporte);

module.exports = router;