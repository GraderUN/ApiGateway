//Permite crear el servidor -> Similar a lo que hace express pero mas limitado
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');


const CoursesAPI = require('./dataSources/courses_api');
const NotasAPI = require('./dataSources/notas_api');
const ClassroomAPI = require('./dataSources/classroom_api')
const SubjectAPI = require('./dataSources/subject_api');



const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        coursesAPI: new CoursesAPI(),
        classroomAPI: new ClassroomAPI(),
        NotasAPI: new NotasAPI(),
        subjectAPI: new SubjectAPI(),
    })
});

server.listen({ port: 5000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});