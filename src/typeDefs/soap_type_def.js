const { gql } = require('apollo-server');

const soapTypeDefs = gql`
    type puntajeInfo {
        email: String!
        name: String!
        puntaje: Int!
    }
`;

module.exports = soapTypeDefs;