const connection = require('./connection');

const conductor = require('../Models/conductor');
const empresaTransporte = require('../Models/empresaTransporte');
const paradero = require('../Models/paradero');
const ruta = require('../Models/ruta');
const rutaparadero = require('../Models/rutaparadero');
const vehiculo = require('../Models/vehiculo');


async function sync(){
    //Foreign key empresasTransporte - vehiculo 
    empresaTransporte.hasMany(vehiculo,{
        foreignKey: 'empresaId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    vehiculo.belongsTo(empresaTransporte,{
        foreignKey: 'empresaId'
    });
    console.log("Ingresó");

    //Foreign key vehiculo - conductor 
    vehiculo.hasMany(conductor,{
        foreignKey: 'placaVehiculo',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    conductor.belongsTo(vehiculo,{
        foreignKey: 'placaVehiculo'
    });

    //Foreign key ruta - vehiculo 
    ruta.hasMany(vehiculo,{
        foreignKey: 'rutaId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    vehiculo.belongsTo(ruta,{
        foreignKey: 'rutaId'
    });

    //Foreign key ruta - paradero 
    rutaparadero.hasMany(ruta,{
        foreignKey: 'rutaId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    rutaparadero.hasMany(paradero,{
        foreignKey: 'paraderoId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });

    ruta.belongsTo(rutaparadero,{
        foreignKey: 'rutaId'
    });
    
    paradero.belongsTo(rutaparadero,{
        foreignKey: 'paraderoId'
    });
    
    await connection.sync({force: false})
    .then(()=>{
         console.log('Base de datos sincronizada');
         
    })
    .catch((error)=>{
         console.error('Error al sincronizar la base de datos:',error);
    });



}
sync();