const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class usuario extends Model{};

usuario.init({
    nombreUsuario: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    contrasena:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'usuario',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = usuario;