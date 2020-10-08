const { gql } = require('apollo-server');

const classroomTypeDefs = gql `
    type Classroom {
        id: String!
        capacidad: Int!
        description: String!
    }

    type ClassroomInfo{
        capacidad: Int!
        description: String!
    }
    
    type Assignement {
        id : String!
        curso : String!
        salon : String!
        horario : String!
        profesor : String!
        materia : String!
    }
    
    type AssignementInfo {
        curso : String!
        salon : String!
        horario : String!
        profesor : String!
        materia : String!
    }

    input ClassroomInput {
        capacidad: Int!
        description: String!
    }

    input AssignementInput {
        curso : String!
        salon : String!
        horario : String!
        profesor : String!
        materia : String!
    }
`;

module.exports = classroomTypeDefs;