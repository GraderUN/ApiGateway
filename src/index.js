//Permite crear el servidor -> Similar a lo que hace express pero mas limitado
const { ApolloServer } = require('apollo-server');
const data = require('./resolvers');

const typeDefs = require('./typeDefs');

const UserAPI = require('./dataSources/user_api');

const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        userAPI: new UserAPI()
    })
});

server.listen({ port: data.port }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});