const classroomResolver = {
    Query: {
        allClassrooms: function(_, __, { dataSources }) {
            return dataSources.classroomAPI.getallClassrooms();
        },

        allAssignements: function(_, __, { dataSources }) {
            return dataSources.classroomAPI.getallAssignemets();
        },

        AssignementsByProfessor: function(_, {professorID}, { dataSources }) {
            return dataSources.classroomAPI.getallAssignemetsByProfessor(professorID);
        },

        AssignementsByCourse: function(_, {courseID}, { dataSources }) {
            return dataSources.classroomAPI.getallAssignemetsByCourse(courseID);
        },
        AssignementsByClassroom: function(_, {classroomID}, { dataSources }) {
            return dataSources.classroomAPI.getallAssignemetsByClassroom(classroomID);
        },
    },

    Mutation: {
        createClassroom: function(_, { classroom }, { dataSources }) {
            return dataSources.classroomAPI.createClassroom(classroom);
        },
        createAssignement: function(_, { assignement }, { dataSources }) {
            return dataSources.classroomAPI.createAssignement(assignement);
        },
    }
};

module.exports = classroomResolver;