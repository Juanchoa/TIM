const express = require('express');
const rutacontroller = require('../Controllers/rutacontroller');
const router = express.Router();

router.post('/crearruta', rutacontroller.crearRuta);
router.get('/listarruta', rutacontroller.listarRuta);
router.put('/editarruta/:rutaId', rutacontroller.editarRuta);
router.put('/deshabilitarruta/:rutaId', rutacontroller.deshabiltarRuta);
router.put('/habilitarruta/:rutaId', rutacontroller.habilitarRuta);

module.exports = router;