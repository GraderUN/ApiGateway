const estudianteResolver = {
    Query: {
        allEstudiantes: (_, __, { dataSources }) => dataSources.estudianteAPI.getAllEstudiantes(),
        estudianteById: (_, { id }, { dataSources }) => dataSources.estudianteAPI.getEstudianteById(id)
    },
    Mutation: {
        createEstudiante: function(_, { estudiante }, { dataSources }) {
            return dataSources.estudianteAPI.createEstudiante(estudiante);
        },
        updateEstudiante: (_, { id, estudiante }, { dataSources }) => dataSources.estudianteAPI.updateEstudiante(id, estudiante),
        deleteEstudiante: (_, { id }, { dataSources }) => dataSources.estudianteAPI.deleteEstudiante(id)
    }
};

module.exports = estudianteResolver;