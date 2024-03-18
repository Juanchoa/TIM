require('express');
const rutaParadero = require('../Models/rutaparadero');
const ruta = require('../Models/ruta');
const paradero = require('../Models/paradero');
//crear el restaurante
async function crearRutaParadero(req,res){ //peticion y respuesta 
    
    try{
        await rutaParadero.create({
            paraderoId: req.body.paraderoId,
            rutaId: req.body.rutaId,
            numeroParada: req.body.numeroParada
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{ //error en el servidor 
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){ //tiene un error en el metodo
        console.log(e);
    }
}
async function listarRutaParadero(req,res){ //peticion y respuesta 

    try{
        await rutaParadero.findAll({
            attributes: [
                'rutaParaderoId',
                'rutaId',
                'paraderoId',
                'numeroParada'   
            ],
            order: ['rutaparaderoId'],
            include: {
                model: ruta,
                where : {rutaId : req.params.rutaId},
                attributes: ['nombreRuta']
            }
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{ //error en el servidor 
            return res.status(400).json({
                error:error
            });
        })
       
    }
    catch(e){ //tiene un error en el metodo
        console.log(e);
    }
    
}
async function editarRutaParadero(req,res){
    try{
        await rutaParadero.update({
           rutaId: req.body.rutaId,
           paraderoId: req.body.paraderoId,
           numeroParada:req.body.numeroParada,
        },{
            where:{rutaParaderoId: req.params.rutaParaderoId}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}
async function habilitarRutaParadero(req,res){
    try{
        await rutaParadero.restore({
            where: { rutaParaderoId : req.params.rutaParaderoId}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}
async function deshabiltarRutaParadero(req,res){
    try{
        await rutaParadero.destroy({
            where:{rutaParaderoId: req.params.rutaParaderoId}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{
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
    crearRutaParadero,
    editarRutaParadero,
    habilitarRutaParadero,
    deshabiltarRutaParadero,
    listarRutaParadero
}