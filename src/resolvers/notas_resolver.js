const notasResolver = {
    Query: {
       PromedioEstudianteMateriaPeriodo: function(_, {datosEstudiante}, { dataSources }) {
        return dataSources.NotasAPI.getPromedioEstudianteMateriaPeriodo(datosEstudiante);
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