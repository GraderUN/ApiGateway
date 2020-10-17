const profesorResolver = {
    Query: {
        allProfesores: (_, __, { dataSources }) => dataSources.profesorAPI.getAllProfesores(),
        profesorById: (_, { id }, { dataSources }) => dataSources.profesorAPI.getProfesorById(id)
    },
    Mutation: {
        createProfesor: function(_, { profesor }, { dataSources }) {
            return dataSources.profesorAPI.createProfesor(profesor);
        },
        updateProfesor: (_, { id, profesor }, { dataSources }) => dataSources.profesorAPI.updateProfesor(id, profesor),
        deleteProfesor: (_, { id }, { dataSources }) => dataSources.profesorAPI.deleteProfesor(id)
    }
};

module.exports = profesorResolver;