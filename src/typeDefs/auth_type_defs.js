const { gql } = require('apollo-server');

const authTypeDefs = gql`
    input User {
        email: String!
        password: String!
    }

    input deleteUser{
        userId: String!
    }

    input updateEmail{
        userId: String!
        email: String!
    }
`;

module.exports = authTypeDefs;