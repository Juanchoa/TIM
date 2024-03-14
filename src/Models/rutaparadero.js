const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class rutaparadero extends Model{};

rutaparadero.init({
    rutaParaderoId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rutaId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    paraderoId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'rutaparadero',
    paranoid: true,
    deletedAt: 'destroyTime'
});
