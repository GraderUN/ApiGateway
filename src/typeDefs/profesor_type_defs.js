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

    type Query {
        allProfesores: [Profesor]!
        profesorById(id: Int!): Profesor!
    }

    type Mutation {
        createProfesor(profesor: ProfesorInput!): Profesor!
        updateProfesor(id: Int!, profesor: ProfesorInput!): Profesor!
        deleteProfesor(id: Int!): Boolean
    }
    
`;

module.exports = profesorTypeDefs;