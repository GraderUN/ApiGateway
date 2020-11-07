const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const CoursesAPI = require('./dataSources/courses_api');
const NotasAPI = require('./dataSources/notas_api');
const ClassroomAPI = require('./dataSources/classroom_api');
const SubjectAPI = require('./dataSources/subject_api');
const AuthAPI = require('./dataSources/auth_api');
const notasGestionAPI = require('./dataSources/gestion_notas_api');
const EstudianteAPI = require('./dataSources/estudiante_api');
const ProfesorAPI = require('./dataSources/profesor_api');
const AdministrativoAPI = require('./dataSources/administrativo_api');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        notasGestionAPI: new notasGestionAPI(),
        coursesAPI: new CoursesAPI(),
        classroomAPI: new ClassroomAPI(),
        NotasAPI: new NotasAPI(),
        authAPI: new AuthAPI(),
        subjectAPI: new SubjectAPI(),
        estudianteAPI: new EstudianteAPI(),
        profesorAPI: new ProfesorAPI(),
        administrativoAPI: new AdministrativoAPI()
    }),
    cors:{
        origin: false
    }
});

server.listen({ port: 5000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});