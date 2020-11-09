const { ApolloServer } = require("apollo-server-express");
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

const express = require("express");
const fs = require("fs");
const https = require("https");
const http = require("http");

const config = { port: 5000, hostname: 'localhost'}

const apollo = new ApolloServer({
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
    cors: {
        origin: '*',
        credentials: true
    }
});

const app = express()
apollo.applyMiddleware({ app })

let server = https.createServer({
    key: fs.readFileSync(`./cert/api.key`),
    cert: fs.readFileSync(`./cert/api.crt`)
    },
    app
);

server.listen({ port: config.port }, () =>
    console.log( '🚀 Server ready at', `https://${config.hostname}:${config.port}${apollo.graphqlPath}`)
)