const classroomResolver = {
    Query: {
        allClassrooms: function(_, __, { dataSources }) {
            return dataSources.classroomApi.getallClassrooms();
        },

        allAssignements: function(_, __, { dataSources }) {
            return dataSources.classroomApi.getallAssignemets();
        },

        AssignementsByProfessor: function(_, {professorID}, { dataSources }) {
            return dataSources.classroomApi.getallAssignemetsByProfessor();
        },

        AssignementsByCourse: function(_, {courseID}, { dataSources }) {
            return dataSources.classroomApi.getallAssignemetsByCourse(courseID);
        },
        AssignementsByClassroom: function(_, {classroomID}, { dataSources }) {
            return dataSources.classroomApi.getallAssignemetsByClassroom(classroomID);
        },
    },

    Mutation: {
        createClassroom: function(_, { classroom }, { dataSources }) {
            return dataSources.classroomApi.createClassroom(classroom);
        },
        createAssignement: function(_, { assignement }, { dataSources }) {
            return dataSources.classroomApi.createAssignement(assignement);
        },
    }
};

module.exports = classroomResolver;