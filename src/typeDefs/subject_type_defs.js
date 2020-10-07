const { gql } = require('apollo-server');

module.exports = gql`
type Subject {
    id: Int!
    name: String!
    grade: Int!
    content: String
}

input SubjectInput {
    name: String!
    grade: Int!
}

type Teacher {
    id_teacher: Int!
    id_subject: Int!
}

input TeacherInput {
    id_teacher: Int!
    id_subject: Int!
}

type SubjectResponse{
    response: String!
    path: String!
    rows: Int
}
`;