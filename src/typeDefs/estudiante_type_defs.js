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
    
`;

module.exports = estudianteTypeDefs;