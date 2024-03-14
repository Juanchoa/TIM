require('express');
const ruta = require('../Models/ruta');

//crear el restaurante
async function crearRuta(req,res){ //peticion y respuesta 

    try{
        await ruta.create({
            rutaId: req.body.rutaId,
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
module.exports = {
    crearRuta,
    listRestaurant,
    updateRestaurant,
    disableRestaurant,
    enableRestaurant
}