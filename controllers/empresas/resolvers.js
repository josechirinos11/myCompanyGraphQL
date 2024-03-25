const Empresa = require('../../models/Empresa');


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


const resolversEmpresas = {
    Query: {
        obtenerEmpresas: async () => {
            console.log('obtener empresa')
        }
    }, 
    Mutation: {
   
        nuevaEmpresa: async(_, {input}, ctx) => {
            console.log('creando empresa')
            console.log(ctx)
            console.log(input)
            try {
                const empresa = new Empresa(input);

                // asociar el creador
                empresa.usuario = ctx.usuario.id;

                // almacenarlo en la BD
                const resultado = await empresa.save();

                return resultado;
            } catch (error) {
                console.log(error);
            }
            
            
        }






        
    }
}

module.exports = resolversEmpresas;