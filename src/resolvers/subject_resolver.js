module.exports = {
    Query: {
        getSubjects: (_, __, { dataSources }) =>
            dataSources.subjectAPI.getSubjects(),
        getSubject: (_, { id }, { dataSources }) =>
            dataSources.subjectAPI.getSubject(id),
        getSubjectsByGrade: (_, { id }, { dataSources }) =>
            dataSources.subjectAPI.getGrade(id),
        getContent: (_, { id }, { dataSources }) =>
            dataSources.subjectAPI.getContent(id),
        getSubjectTeachers: (_, { id }, { dataSources }) =>
            dataSources.subjectAPI.getSubjectTeachers(id),
        getTeacherSubjects: (_, { id }, { dataSources }) =>
            dataSources.subjectAPI.getTeacherSubjects(id),
    },
    Mutation: {
        postSubject: function (_, { data }, { dataSources }) {
            return dataSources.subjectAPI.postSubject(data);
        },
        putSubject: function (_, { id, data }, { dataSources }) {
            return dataSources.subjectAPI.putSubject(id, data);
        },
        deleteSubject: function (_, { id }, { dataSources }) {
            return dataSources.subjectAPI.deleteSubject(id);
        },
        putContent: function (_, { id, content }, { dataSources }) {
            return dataSources.subjectAPI.putContent(id, content);
        },
        postTeacher: function (_, { data }, { dataSources }) {
            return dataSources.subjectAPI.postTeacher(data);
        },
        deleteTeacher: function (_, { data }, { dataSources }) {
            return dataSources.subjectAPI.deleteTeacher(data);
        },
    }
}