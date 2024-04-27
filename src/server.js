require('./DataBase/sync.js');

const connection = require('./DataBase/connection');
const cors =require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

//routers
const conductorrouter = require('./Routers/conductorrouter.js');
const empresatransporterouter = require('./Routers/empresatransporterouter.js');
const paraderorouter = require('./Routers/paraderorouter.js');
const rutaparaderorouter = require('./Routers/rutaparaderorouter.js');
const rutarouter = require('./Routers/rutarouter.js');
const usuariorouter = require('./Routers/usuariorouter.js');
const vehiculorouter = require('./Routers/vehiculorouter.js');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({
    origin: 'http://localhost:3000/'
}));

app.listen(port, function() { // NOS VA A ESCUCHAR POR EL PUERTO QUE LE DEFINIMOS
    console.log('The application is running on port' + port);
})

//api
app.use('/api', conductorrouter);
app.use('/api', empresatransporterouter);
app.use('/api', paraderorouter);
app.use('/api', rutaparaderorouter);
app.use('/api', rutarouter);
app.use('/api', usuariorouter);
app.use('/api', vehiculorouter);    