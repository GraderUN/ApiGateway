const classroomResolver = {
    Query: {
        allClassrooms: function(_, __, { dataSources }) {
            //permisos administrador
            return dataSources.Classroom_api.getallClassrooms();
        },

    },

    Mutation: {
        createClassroom: function(_, { classroom }, { dataSources }) {
            return dataSources.Classroom_api.createClassroom(classroom);
        },

    }
};

module.exports = classroomResolver;