const { gql } = require('apollo-server');

const coursesTypeDefs = gql `
    type Student {
        id: String!
        id_course: String!
        course: CourseInfo!
    }

    type CourseInfo{
        grade: Int!
        letter: String!
    }

    type Course {
        grade: Int!
        letter: String!
        id_students: [String]!
    }

    type Courses {
        id: String!
        grade: Int!
        letter: String!
    }

    type CourseWithStudentsInfo {
        grade: Int!
        letter: Int!
        id_students: [Student]!
    }

    input CourseInput {
        grade: Int!
        letter: String!
    }

    input StudentInput {
        id: String!
        id_course: String!
    }
`;

module.exports = coursesTypeDefs;