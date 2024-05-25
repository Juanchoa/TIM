require('express');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const usuario = require('../Models/usuario');

const jwtPassword = 'qwe987gfd'

async function listarRolUsuario(req,res){
    try{
        res.json(await usuario.rolUsuario().sort())
    }
    catch(e){
        console.log(e);
    }
}

//crear usuario
async function crearUsuario(req, res){ // peticion y respuesta a esa peticion
    try{
        const hashPassword = await bcrypt.hash(req.body.contrasena, 10)
        await usuario.create({
            nombreUsuario: req.body.nombreUsuario,
            contrasena: hashPassword,
            rolUsuario: req.body.rolUsuario
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{ // error en el servidor
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){ // tiene un error en el metodo
        console.log(e);
    } 
} 

async function listarUsuario(req,res){
    try{
        await usuario.findAll({
            attributes: [
                'nombreUsuario',
                'rolUsuario'
            ],
            order:['nombreUsuario']
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function actualizarUsuario(req,res){
    try{
        await usuario.update({
            nombreUsuario: req.body.nombreUsuario
        },{
            where:{nombreUsuario: req.params.nombreUsuario}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function deshabilitarUsuario(req,res){
    try{
        await usuario.destroy({
            where:{nombreUsuario: req.params.nombreUsuario}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function habilitarUsuario(req,res){
    try{
        await usuario.restore({
            where: {nombreUsuario: req.params.nombreUsuario}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function login (req,res){
    try{
        const usuarioData = await usuario.findOne({where:{nombreUsuario: req.body.nombreUsuario}})

        if(!usuarioData)
            return res.status(401).json({message: "Usuario no encontrado"})
        
        const validPassword = await bcrypt.compare(req.body.contrasena, usuarioData.contrasena)
        
        if(!validPassword){
            return res.status(401).json({message: "Contraseña incorrecta"})
        }

        const token = jwt.sign(
            {nombreUsuario: usuarioData.nombreUsuario, rolUsuario: usuarioData.rolUsuario},
            jwtPassword,
            { expiresIn: '1h'}
        )

        return res.status(200).json({token})
    }
    catch(e){
        console.log(e);

    }  
}


function verificarToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    // Verificar el token
    jwt.verify(token.split(' ')[1], jwtPassword, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        req.usuario = decoded;
        next();
    });
}






module.exports = {
    crearUsuario,
    listarRolUsuario,
    listarUsuario,
    actualizarUsuario,
    deshabilitarUsuario,
    habilitarUsuario, 
    login,
    verificarToken
}