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

    type Query {
        allUsers: [User]!
        userById(id: Int!): User!
    }

    type Mutation {
        createUser(user: UserInput!): User!
        updateUser(id: Int!, user: UserInput!): User!
        deleteUser(id: Int!): Int
    }
`;

module.exports = userTypeDefs; 