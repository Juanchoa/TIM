require('express');
const paradero = require('../Models/paradero');

//crear paradero
async function crearParadero(req, res){ // peticion y respuesta a esa peticion
    try{
        await paradero.create({
            nombreParadero: req.body.nombreParadero
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

async function listarParadero(req,res){
    try{
        await paradero.findAll({
            attributes: [
                'paraderoId',
                'nombreParadero'
            ],
            order:['nombreParadero']
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

async function actualizarParadero(req,res){
    try{
        await paradero.update({
            nombreParadero: req.body.nombreParadero
        },{
            where:{paraderoId: req.params.paraderoId}
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

async function deshabilitarParadero(req,res){
    try{
        await paradero.destroy({
            where:{paraderoId: req.params.paraderoId}
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

async function habilitarParadero(req,res){
    try{
        await paradero.restore({
            where: {paraderoId: req.params.paraderoId}
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
    crearParadero,
    listarParadero,
    actualizarParadero,
    deshabilitarParadero,
    habilitarParadero
}