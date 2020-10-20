const { gql } = require('apollo-server');

const administrativoTypeDefs = gql `
    type Administrativo {
        id: Int!
        nombre: String!
        apellido: String!
        edad: Int!
        telefono: Int!
        email: String!
    }
    
    input AdministrativoInput {
        nombre: String!
        apellido: String!
        edad: Int!
        telefono: Int!
        email: String!
    }
    
`;

module.exports = administrativoTypeDefs;