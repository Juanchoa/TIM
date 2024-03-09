const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

const paradero = require('./paradero');
class ruta extends Model{};

ruta.init({
    rutaId: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    primeraEstacion:{
        type: paradero,
        allowNull: false
    },
    siguienteEstacion:{
        type: paradero,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'ruta',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = ruta;