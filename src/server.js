require('./DataBase/sync.js');

const usuariocontroller = require('./Controllers/usuariocontroller');

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
    origin: 'http://localhost:3000'
}));

app.listen(port, function() { // NOS VA A ESCUCHAR POR EL PUERTO QUE LE DEFINIMOS
    console.log('The application is running on port' + port);
})

//api
app.use('/api', usuariorouter);  

// Define las rutas que deseas proteger
const rutasProtegidas = [
    { router: conductorrouter }, 
    { router: empresatransporterouter },
    { router: paraderorouter },
    { router: rutaparaderorouter},
    { router: rutarouter},
    { router: vehiculorouter}
];

// Itera sobre las rutas protegidas y aplica el middleware de verificación de token
rutasProtegidas.forEach(({ router }) => {
    app.use(`/api`, usuariocontroller.verificarToken, router);
});



  