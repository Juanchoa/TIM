const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class paradero extends Model{};

paradero.init({
    paraderoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreParadero:{
        type: DataTypes.STRING,
        allowNull: false
    },
    horaInicio:{
        type: DataTypes.TIME,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'paradero',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = paradero;