const { gql } = require('apollo-server');

const profesorTypeDefs = gql`
    type Profesor {
        id: Int!
        nombre: String!
        apellido: String!
        edad: Int!
        telefono: Int!
        email: String!
    }
    
    input ProfesorInput {
        nombre: String!
        apellido: String!
        edad: Int!
        telefono: Int!
        email: String!
    }

`;

module.exports = profesorTypeDefs;