const express = require('express');
const usuariocontroller = require('../Controllers/usuariocontroller');
const router = express.Router();

router.post('/crearusuario',usuariocontroller.crearUsuario);
router.get('/listarusuario', usuariocontroller.listarUsuario);
router.put('/actualizarusuario/:nombreUsuario', usuariocontroller.actualizarUsuario);
router.put('/deshabilitarusuario/:nombreUsuario', usuariocontroller.deshabilitarUsuario);
router.put('/habilitarusuario/:nombreUsuario', usuariocontroller.habilitarUsuario);

module.exports = router;