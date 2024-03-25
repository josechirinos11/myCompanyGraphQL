const typeDefsUsuario = require('../controllers/usuarios/schema');
const typeDefsAuth = require('../controllers/auth/schema');
const typeDefsEmpresa = require('../controllers/empresas/schema')



const typeDefs = [
    typeDefsUsuario,
    typeDefsAuth,
    typeDefsEmpresa
    ];

module.exports = typeDefs;