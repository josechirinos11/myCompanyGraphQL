const  {  gql } = require('apollo-server');

const typeDefsEmpresas = gql`

type Empresa {
    nombre: String
    id: ID
    usuarioID: ID
}



type Query {
    obtenerEmpresas : [Empresa]
}





input EmpresaInput {
    nombre: String!
    identificacion: String
    correo: String
    telefono: String
    direccion: String


}




    type Mutation {

        # Empresa
        nuevaEmpresa(input: EmpresaInput ) : Empresa

       
    }

`;

module.exports = typeDefsEmpresas;