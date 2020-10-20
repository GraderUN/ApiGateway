const { gql } = require('apollo-server');

const administrativoTypeDefs = gql `
    type Administrativo {
        id: Int!
        nombre: String!
        apellido: String!
        edad: Int!
        sexo: String!
        nombreTutor: String!
        apellidoTutor: String!
        telefonoTutor: String!
        emailTutor: String!
    }
    
    input AdministrativoInput {
        nombre: String!
        apellido: String!
        edad: Int!
        sexo: String!
        nombreTutor: String!
        apellidoTutor: String!
        telefonoTutor: String!
        emailTutor: String!
    }
    
`;

module.exports = administrativoTypeDefs;