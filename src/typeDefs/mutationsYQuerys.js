const { gql } = require('apollo-server');

const generalTypeDefs = gql `
    
    
    type Query {
        allClassrooms: [Classroom]!
        allAssignements: [Assignement]!
        AssignementsByProfessor(proffesor: String!): [Assignement]!
        AssignementsByCourse(course: String!): [Assignement]!
        AssignementsByClassroom(classroom: String!): [Assignement]!
        allCourses: [Courses]!
        courseById(id: String!): Course!
        allStudents: [Student]!
        studentById(id: String!): Student!
        authRequest(token: String!): String!
        

        PromedioEstudianteMateriaPeriodo(datosEstudianteMateriaPeriodo : datosEstudianteMateriaPeriodo!): Float!
        PromedioEstudianteMateria(datosEstudianteMateria : datosEstudianteMateria!): Float!
        PromedioEstudiante(datosEstudiante : datosEstudiante!): Float!
        promedioCurso(datosCurso: datosCurso!): Float!
        estadisticasCurso(notasIdCurso: datosCurso!): estadisticas!
    }

    type Mutation {
        createClassroom(classroom: ClassroomInput!): String
        createAssignement(assignement: AssignamentInput!): String
        createCourse(course: CourseInput!): Courses!
        deleteCourse(id: String!): Course!
        createStudent(student: StudentInput!): Student!
        updateStudent(student: StudentInput!): Student!
        deleteStudent(id: String!): Student!
        deleteUser(user: deleteUser!): String!
        createUser(user: User!): String!
        updateEmail(update: updateEmail!): Boolean!
    }
`;

module.exports = generalTypeDefs;