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
        allAdministrativos: [Administrativo]!
        administrativoById(id: Int!): Administrativo!
        allProfesores: [Profesor]!
        profesorById(id: Int!): Profesor!
        allEstudiantes: [Estudiante]!
        estudianteById(id: Int!): Estudiante!
    }

    type Mutation {
        createAdministrativo(administrativo: AdministrativoInput!): Administrativo!
        updateAdministrativo(id: Int!, administrativo: AdministrativoInput!): Administrativo!
        deleteAdministrativo(id: Int!): Boolean!
        createProfesor(profesor: ProfesorInput!): Profesor!
        updateProfesor(id: Int!, profesor: ProfesorInput!): Profesor!
        deleteProfesor(id: Int!): Boolean!
        createEstudiante(estudiante: EstudianteInput!): Estudiante!
        updateEstudiante(id: Int!, estudiante: EstudianteInput!): Estudiante!
        deleteEstudiante(id: Int!): Boolean!
    }
    
`;

module.exports = administrativoTypeDefs;