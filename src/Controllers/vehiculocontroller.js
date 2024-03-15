require('express');
const vehiculo = require('../Models/vehiculo');
const empresa = require('../Models/empresatransporte');

//crear vehiculo
async function crearVehiculo(req, res){ // peticion y respuesta a esa peticion
    try{
        await vehiculo.create({
            placaVehiculo: req.body.placaVehiculo,
            marca: req.body.marca,
            empresaId: req.body.empresaId,
            rutaId: req.body.rutaId
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

async function listarVehiculo(req,res){
    try{
        await vehiculo.findAll({
            attributes: [
                'placaVehiculo',
                'marca',
                'rutaId'
            ],
            order:['placaVehiculo'],
            include:{
                model:empresa,
                where:{empresaId: req.params.empresaId},
                attributes:['nombreEmpresa']
            }
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

async function actualizarVehiculo(req,res){
    try{
        await vehiculo.update({
            placaVehiculo: req.body.placaVehiculo,
            marca: req.body.marca,
            rutaId: req.body.rutaId
        },{
            where:{placaVehiculo: req.params.placaVehiculo}
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

async function deshabilitarVehiculo(req,res){
    try{
        await vehiculo.destroy({
            where:{placaVehiculo: req.params.placaVehiculo}
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

async function habilitarVehiculo(req,res){
    try{
        await vehiculo.restore({
            where: {placaVehiculo: req.params.placaVehiculo}
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
    crearVehiculo,
    listarVehiculo,
    actualizarVehiculo,
    deshabilitarVehiculo,
    habilitarVehiculo
}