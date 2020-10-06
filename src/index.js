//Permite crear el servidor -> Similar a lo que hace express pero mas limitado
const { ApolloServer } = require('apollo-server');
const data = require('./resolvers');

const typeDefs = require('./typeDefs');

const CoursesAPI = require('./dataSources/courses_api');
const NotasAPI = require('./dataSources/notas_api');

const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        coursesAPI: new CoursesAPI(),
        notasAPI: new NotasAPI()
    })
});

server.listen({ port: 5000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});