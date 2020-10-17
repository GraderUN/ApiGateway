const { gql } = require('apollo-server');

const estudianteTypeDefs = gql`
    type Estudiante {
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
    
    input EstudianteInput {
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
        allEstudiantes: [Estudiante]!
        estudianteById(id: Int!): Estudiante!
    }

    type Mutation {
        createEstudiante(estudiante: EstudianteInput!): Estudiante!
        updateEstudiante(id: Int!, estudiante: EstudianteInput!): Estudiante!
        deleteEstudiante(id: Int!): Boolean
    }
    
`;

module.exports = estudianteTypeDefs;