const { Sequelize } = require('sequelize'); 

var dataBase = 'TIM'; 
var userName = 'postgres'; 
var password = 'ab001133'; 

const connection = new Sequelize(dataBase,userName,password,{ 
    host: 'localhost', 
    dialect: 'postgres' 
}); 

module.exports = connection;  