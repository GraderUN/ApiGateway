const { gql } = require('apollo-server');

const administrativoTypeDefs = gql`
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

    type Query {
        allAdministrativoss: [Administrativo]!
        administrativoById(id: Int!): Administrativo!
    }

    type Mutation {
        createAdministrativo(administrativo: AdministrativoInput!): Administrativo!
        updateAdministrativo(id: Int!, administrativo: AdministrativoInput!): Administrativo!
        deleteAdministrativo(id: Int!): Boolean
    }
    
`;

module.exports = administrativoTypeDefs;