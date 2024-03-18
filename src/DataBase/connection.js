const { Sequelize } = require('sequelize'); 

var dataBase = 'TIM1'; 
var userName = 'postgres'; 
var password = 'Televicion1?'; 

const connection = new Sequelize(dataBase,userName,password,{ 
    host: 'localhost', 
    dialect: 'postgres' 
}); 

module.exports = connection;  