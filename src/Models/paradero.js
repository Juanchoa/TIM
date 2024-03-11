const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class paradero extends Model{};

paradero.init({
    paraderoId: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    nombreParadero:{
        type: DataTypes.STRING,
        allowNull: false
    },
    horaInicio:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'paradero',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = paradero;