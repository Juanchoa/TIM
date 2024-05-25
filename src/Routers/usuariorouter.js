const express = require('express');
const usuariocontroller = require('../Controllers/usuariocontroller');
const router = express.Router();

router.post('/crearusuario',usuariocontroller.crearUsuario);
router.post('/login',usuariocontroller.login);
router.get('/listarusuario', usuariocontroller.listarUsuario);
router.get('/listarrolusuario', usuariocontroller.listarRolUsuario);
router.put('/actualizarusuario/:nombreUsuario', usuariocontroller.actualizarUsuario);
router.put('/deshabilitarusuario/:nombreUsuario', usuariocontroller.deshabilitarUsuario);
router.put('/habilitarusuario/:nombreUsuario', usuariocontroller.habilitarUsuario);

module.exports = router;