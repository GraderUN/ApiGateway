//Permite crear el servidor -> Similar a lo que hace express pero mas limitado
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');

const EstudianteAPI = require('./dataSources/estudiante_api');
const ProfesorAPI = require('./dataSources/profesor_api');
const AdministrativoAPI = require('./dataSources/administrativo_api');

const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        estudianteAPI: new EstudianteAPI(), profesorAPI: new ProfesorAPI(),
        administrativoAPI: new AdministrativoAPI()
    })
});

server.listen({ port: 5000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});