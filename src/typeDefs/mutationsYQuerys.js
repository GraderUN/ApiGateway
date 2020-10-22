const { gql } = require('apollo-server');

module.exports = gql`
    type Query {
        allClassrooms: [Classroom]!
        allAssignements: [Assignement]!
        AssignementsByProfessor(professor: String!): [Assignement]!
        AssignementsByCourse(course: String!): [Assignement]!
        AssignementsByClassroom(classroom: String!): [Assignement]!
        allCourses: [Courses]!
        courseById(id: String!): Course!
        allStudents: [Student]!
        studentById(id: String!): Student!
        authRequest(token: String!): String!
        #query ferney
        getNotabyId(id: Int!): notasGestion!
        getTipoNotabyId(id: Int!): tipoNotasGestion!
        getTipoNotas: [tipoNotasGestion]!
        

        PromedioEstudianteMateriaPeriodo(datosEstudianteMateriaPeriodo : datosEstudianteMateriaPeriodo!): Float!
        PromedioEstudianteMateria(datosEstudianteMateria : datosEstudianteMateria!): Float!
        PromedioEstudiante(datosEstudiante : datosEstudiante!): Float!
        promedioCurso(datosCurso: datosCurso!): Float!
        estadisticasCurso(notasIdCurso: datosCurso!): estadisticas!
        # Subject queries
        getSubjects: [Subject]!
        getSubject(id: Int!): Subject!
        getContent(id: Int!): Subject!
        getSubjectTeachers(id: Int!): [Teacher]!
        getTeacherSubjects(id: Int!): [Teacher]!
    }

    type Mutation {
        createClassroom(classroom: ClassroomInput!): String
        createAssignement(assignement: AssignementInput!): String
        createCourse(course: CourseInput!): Courses!
        deleteCourse(id: String!): Course!
        createStudent(student: StudentInput!): Student!
        updateStudent(student: StudentInput!): Student!
        deleteStudent(id: String!): Student!
        deleteUser(user: deleteUser!): String!
        createUser(user: User!): String!
        updateEmail(update: updateEmail!): Boolean!

        # Subject mutations
        postSubject(data: SubjectInput!): SubjectResponse!
        putSubject(data: SubjectInput!): SubjectResponse!
        deleteSubject(id: Int!): SubjectResponse!
        putContent(id: Int!, content: String!): SubjectResponse!
        postTeacher(data: TeacherInput!): SubjectResponse!
        deleteTeacher(data: TeacherInput!): SubjectResponse!

        #ferney mutations
        createNota(notasGestionInput: notasGestionInput!): Int! 
        updateNota(id: Int!, notasUpdateInput: notasUpdateInput!): Int!
        deleteNota(id: Int!): Int! 
        createTipoNota(tipoNotasGestionInput: tipoNotasGestionInput!): Int! 
        updateTipoNota(id: Int!, tipoNotasUpdateInput: tipoNotasUpdateInput!): Int!
        deleteTipoNota(id: Int!): Int! 
    }`;
