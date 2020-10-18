const { gql } = require('apollo-server');

const profesorTypeDefs = gql`
    type Profesor {
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
    
    input ProfesorInput {
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

module.exports = profesorTypeDefs;