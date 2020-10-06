const notasResolver = {
    Query: {
       PromedioEstudianteMateriaPeriodo: function(_, {notasIdEstudiante, notasIdMateria, notasPeriodo},
                                                  { dataSources }) {
        return dataSources.NotasAPI.getPromedioEstudianteMateriaPeriodo(notasIdEstudiante, notasIdMateria, notasPeriodo);
       },

        PromedioEstudianteMateria: function(_, {notasIdEstudiante, notasIdMateria}, { dataSources }) {
            return dataSources.NotasAPI.getPromedioEstudianteMateria(notasIdEstudiante, notasIdMateria);
        },

        PromedioEstudiante: function(_, {notasIdEstudiante}, { dataSources }) {
            return dataSources.NotasAPI.getPromedioEstudiante(notasIdEstudiante);
        },

        promedioCurso: function(_, {notasIdCurso}, { dataSources }) {
            return dataSources.NotasAPI.getPromedioCurso(notasIdCurso);
        },

    },
    Mutation: {

    }
};



module.exports = notasResolver;