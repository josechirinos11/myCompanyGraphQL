const resolversUsuario = require('../controllers/usuarios/resolvers');
const resolversAuth = require('../controllers/auth/resolvers');
const resolversEmpresas = require('../controllers/empresas/resolvers')


const resolvers = [
    resolversUsuario,
    resolversAuth,
    resolversEmpresas
    ];


module.exports = resolvers;