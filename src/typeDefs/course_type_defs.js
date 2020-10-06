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


    type Query {
        allCourses: [Courses]!
        courseById(id: String!): Course!
        allStudents: [Student]!
        studentById(id: String!): Student!
    }

    input CourseInput {
        grade: Int!
        letter: String!
    }

    input StudentInput {
        id: String!
        id_course: String!
    }

    type Mutation {
        createCourse(course: CourseInput!): Courses!
        deleteCourse(id: String!): Course!
        createStudent(student: StudentInput!): Student!
        updateStudent(student: StudentInput!): Student!
        deleteStudent(id: String!): Student!
    }
`;

module.exports = coursesTypeDefs;