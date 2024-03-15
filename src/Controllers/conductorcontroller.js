require('express');
const conductor = require('../Models/conductor');
const vehiculo = require('../Models/vehiculo');


async function crearConductor(req,res){ //peticion y respuesta 
    
    try{
        await conductor.create({
            conductorId: req.body.conductorId,
            nombreConductor: req.body.nombreConductor,
            placaVehiculo: req.body.placaVehiculo,
            horarioConductor: req.body.horarioConductor
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
async function listarConductor(req,res){ //peticion y respuesta 
    try{
        await ruta.findAll({
            attributes:[
             'conductorId',
             'nombreConductor',
             'placaVehiculo',
             'horarioConductor'
            ],
            order: ['conductorId']
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
async function editarConductor(req,res){
    try{
        await conductor.update({
             nombreConductor: req.body.conductorId,
             placaVehiculo: req.body.placaVehiculo,
             horarioConductor: req.body.horarioConductor
        },{
            where:{rutaId: req.params.rutaId}
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
async function habilitarConductor(req,res){
    try{
        await conductor.restore({
            where: { conductorId : req.params.conductorId}
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
async function deshabiltarConductor(req,res){
    try{
        await conductor.destroy({
            where:{conductorId: req.params.conductorId}
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
    crearConductor,
    editarConductor,
    deshabiltarConductor,
    habilitarConductor,
    listarConductor
}
