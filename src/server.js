const connection = require('./DataBase/connection');
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

connection.sync({force: false}) // metodo que sincroniza la base de datos
    .then(() => { 
        console.log('Base de datos sincronizada');
        app.listen(port, function() { // NOS VA A ESCUCHAR POR EL PUERTO QUE LE DEFINIMOS
            console.log('The application is running on port' + port);
        })
    })  
    .catch((error) =>{
        console.error('Error syncing DataBase' + error);
    });