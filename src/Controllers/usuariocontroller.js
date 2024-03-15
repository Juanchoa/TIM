require('express');
const usuario = require('../Models/usuario');

//crear usuario
async function crearUsuario(req, res){ // peticion y respuesta a esa peticion
    try{
        await usuario.create({
            nombreUsuario: req.body.nombreUsuario,
            contrasena: req.body.contrasena
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{ // error en el servidor
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){ // tiene un error en el metodo
        console.log(e);
    } 
} 

async function listarUsuario(req,res){
    try{
        await usuario.findAll({
            attributes: [
                'nombreUsuario'
            ],
            order:['nombreUsuario']
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function actualizarUsuario(req,res){
    try{
        await usuario.update({
            nombreUsuario: req.body.nombreUsuario
        },{
            where:{nombreUsuario: req.params.nombreUsuario}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function deshabilitarUsuario(req,res){
    try{
        await usuario.destroy({
            where:{nombreUsuario: req.params.nombreUsuario}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function habilitarUsuario(req,res){
    try{
        await usuario.restore({
            where: {nombreUsuario: req.params.nombreUsuario}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {
    crearUsuario,
    listarUsuario,
    actualizarUsuario,
    deshabilitarUsuario,
    habilitarUsuario
}