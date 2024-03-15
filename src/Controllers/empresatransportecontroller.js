require('express');
const empresaTransporte = require('../Models/empresaTransporte');

async function crearEmpresaTransporte(req,res){ //peticion y respuesta 
    
    try{
        await empresaTransporte.create({
            nombreEmpresa: req.body.nombreEmpresa
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
async function listarEmpresaTransporte(req,res){ //peticion y respuesta 
    try{
        await empresaTransporte.findAll({
            attributes:[
             'empresaId',
             'nombreEmpresa'
            ],
            order: ['empresaId']
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
async function editarEmpresaTransporte(req,res){
    try{
        await empresaTransporte.update({
             nombreEmpresa: req.body.nombreEmpresa
        },{
            where:{empresaId: req.params.empresaId}
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
async function habilitarEmpresaTransporte(req,res){
    try{
        await empresaTransporte.restore({
            where: { empresaId : req.params.empresaId}
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
async function deshabiltarEmpresaTransporte(req,res){
    try{
        await empresaTransporte.destroy({
            where:{empresaId: req.params.empresaId}
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
    crearEmpresaTransporte,
    editarEmpresaTransporte,
    listarEmpresaTransporte,
    deshabiltarEmpresaTransporte,
    habilitarEmpresaTransporte
}