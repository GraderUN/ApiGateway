const { gql } = require('apollo-server');

const userTypeDefs = gql`
    type User {
        id: Int!
        firstName: String!
        lastName: String!
        username: String!
        password: String!
    }
    
    input UserInput {
        firstName: String!
        lastName: String!
        username: String!
        password: String!
    }

`;

module.exports = userTypeDefs; 