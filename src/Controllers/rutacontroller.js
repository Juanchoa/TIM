require('express');
const ruta = require('../Models/ruta');


async function crearRuta(req,res){ //peticion y respuesta 
    
    try{
        await ruta.create({
            nombreRuta: req.body.nombreRuta,
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
async function listarRuta(req,res){ //peticion y respuesta 

    try{
        await ruta.findAll({
            attributes: [
                'rutaId',
                'nombreRuta'
            ],
            order: ['nombreRuta']
            
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
async function editarRuta(req,res){
    try{
        await ruta.update({
           nombreRuta: req.body.nombreRuta
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
async function habilitarRuta(req,res){
    try{
        await ruta.restore({
            where: { rutaId : req.params.rutaId}
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
async function deshabiltarRuta(req,res){
    try{
        await ruta.destroy({
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
module.exports = {
    crearRuta,
    editarRuta,
    habilitarRuta,
    deshabiltarRuta,
    listarRuta
}