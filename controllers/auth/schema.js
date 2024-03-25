const  {  gql } = require('apollo-server');

const typeDefsAuth = gql`
    type Token {
        token: String
    }

    

    input AutenticarInput {
        email: String!
        password: String!
    }

  

    type Mutation {

        # Usuarios
       
        autenticarUsuario(input: AutenticarInput ) : Token

       
    }

`;

module.exports = typeDefsAuth;