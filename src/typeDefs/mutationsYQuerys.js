const { gql } = require('apollo-server');

module.exports = gql `
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
        courseStudents(id: String!): [Estudiante]
	    studentsWithoutCourse:[Estudiante]!
        #query ferney
        getNota(id: Int!): notasGestion!
        authRequest(token: String!): String!
        

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

        #Francisco
        allAdministrativos: [Administrativo]!
        administrativoById(id: Int!): Administrativo!
        allProfesores: [Profesor]!
        profesorById(id: Int!): Profesor!
        allEstudiantes: [Estudiante]!
        estudianteById(id: Int!): Estudiante!
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

        #Francisco
        createAdministrativo(administrativo: AdministrativoInput!): Boolean!
        updateAdministrativo(id: Int!, administrativo: AdministrativoInput!): Boolean!
        deleteAdministrativo(id: Int!): Boolean!
        createProfesor(profesor: ProfesorInput!): Boolean!
        updateProfesor(id: Int!, profesor: ProfesorInput!): Boolean!
        deleteProfesor(id: Int!): Boolean!
        createEstudiante(estudiante: EstudianteInput!): Boolean!
        updateEstudiante(id: Int!, estudiante: EstudianteInput!): Boolean!
        deleteEstudiante(id: Int!): Boolean!
    }`;