const { gql } = require('apollo-server');

const classroomTypeDefs = gql `
    type Classroom {
        id: String!
        capacity: Int!
        description: String!
    }

    type ClassroomInfo{
        capacity: Int!
        description: String!
    }
    
    type Assignement {
        id : String!
        curso : String!
        salon : String!
        horario : String!
        profesor : String!
    }
    
    type AssignementInfo {
        curso : String!
        salon : String!
        horario : String!
        profesor : String!
    }

    type Query {
        allClassrooms: [Clasroom]!
        allAssignements: [Assignement]!
        AssignementsByProffesor(proffesor: String!): [Assignement]!
        AssignementsByCourse(course: String!): [Assignement]!
        AssignementsByClassroom(classroom: String!): [Assignement]!
        
    }

    input ClassroomInput {
        grade: Int!
        letter: String!
    }

    input AssignamentInput {
        curso : String!
        salon : String!
        horario : String!
        profesor : String!
    }

    type Mutation {
        createClassroom(classroom: CourseInput!): Classroom
        assignClassroom(assignement: AssignamentInput!): Assignement
    }
`;

module.exports = classroomTypeDefs;