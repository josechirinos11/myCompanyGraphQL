const Usuario = require('../../models/Usuario');
const Proyecto = require('../../models/Proyecto');
const Tarea = require('../../models/Tarea');

const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: 'variables.env'});

// Crea y firma un JWT
const crearToken = (usuario, secreta, expiresIn) => {
    // console.log(usuario);
    const { id, email, nombre } = usuario;

    return jwt.sign( { id, email, nombre }, secreta, { expiresIn } );
}


const resolversAuth = {

    Mutation: {
   
        autenticarUsuario:  async (_, {input}) => {
            
            const { email, password} = input;

            // Si el usuario existe
            const existeUsuario = await Usuario.findOne({ email });

            // si el usuario existe
            if(!existeUsuario) {
                throw new Error('El Usuario no existe');
            }

            // Si el password es correcto
            const passwordCorrecto = await bcryptjs.compare(password, existeUsuario.password);
            if(!passwordCorrecto) {
                throw new Error('Password Incorrecto');
            }

            // Dar acceso a la app
            return {
                token: crearToken(existeUsuario, process.env.SECRETA, '4hr' )
            }
        }
    }
}

module.exports = resolversAuth;