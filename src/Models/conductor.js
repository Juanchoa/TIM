const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class conductor extends Model{};

conductor.init({
    conductorId: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    nombreConductor:{
        type: DataTypes.STRING,
        allowNull: false
    },
    placaVehiculo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    horarioConductor:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'conductor',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = conductor;