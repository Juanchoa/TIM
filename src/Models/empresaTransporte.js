const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class empresaTransporte extends Model{};

empresaTransporte.init({
    empresaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreEmpresa:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'empresaTransporte',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = empresaTransporte;