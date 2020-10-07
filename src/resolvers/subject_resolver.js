module.exports = {
    Query: {
        getSubjects: (_, __, { dataSources }) =>
            dataSources.subjectAPI.getSubjects(),
        getSubject: (_, { id }, { dataSources }) =>
            dataSources.subjectAPI.getSubject(id),
        getContent: (_, { id }, { dataSources }) =>
            dataSources.subjectAPI.getContent(id),
        getSubjectTeachers: (_, __, { dataSources }) =>
            dataSources.subjectAPI.getSubjectTeachers(),
        getTeacherSubjects: (_, __, { dataSources }) =>
            dataSources.subjectAPI.getTeacherSubjects(),
    },
    Mutation: {
        postSubject: function(_, { subject }, { dataSources }) {
            return dataSources.classroomAPI.postSubject(subject);
        },
        putSubject: function(_, { id, subject }, { dataSources }) {
            return dataSources.classroomAPI.putSubject(id, subject);
        },
        deleteSubject: function(_, { id }, { dataSources }) {
            return dataSources.classroomAPI.deleteSubject(id);
        },
        putContent: function(_, { id, content }, { dataSources }) {
            return dataSources.classroomAPI.putContent(id, content);
        },
        postTeacher: function(_, { teacher }, { dataSources }) {
            return dataSources.classroomAPI.postTeacher(teacher);
        },
        deleteTeacher: function(_, { teacher }, { dataSources }) {
            return dataSources.classroomAPI.deleteTeacher(teacher);
        },
    }
}