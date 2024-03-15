const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class vehiculo extends Model{};

vehiculo.init({
    placaVehiculo: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    empresaId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rutaId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marca:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'vehiculo',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = vehiculo;