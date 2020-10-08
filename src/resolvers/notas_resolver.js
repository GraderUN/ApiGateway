const notasResolver = {
    Query: {
       PromedioEstudianteMateriaPeriodo: function(_, {datosEstudianteMateriaPeriodo}, { dataSources }) {
        return dataSources.NotasAPI.getPromedioEstudianteMateriaPeriodo(datosEstudianteMateriaPeriodo);
       },

        PromedioEstudianteMateria: function(_, {datosEstudianteMateria}, { dataSources }) {
            return dataSources.NotasAPI.getPromedioEstudianteMateria(datosEstudianteMateria);
        },

        PromedioEstudiante: function(_, {datosEstudiante}, { dataSources }) {
            return dataSources.NotasAPI.getPromedioEstudiante(datosEstudiante);
        },

        promedioCurso: function(_, {datosCurso}, { dataSources }) {
            return dataSources.NotasAPI.getPromedioCurso(datosCurso);
        },

        estadisticasCurso: function(_, { notasIdCurso }, { dataSources }) {
           let res = dataSources.coursesAPI.getCourseById(notasIdCurso.notasIdCurso.toString());
            return dataSources.NotasAPI.getEstadisticasCurso(notasIdCurso);
        },

    },
    Mutation: {

    }
};



module.exports = notasResolver;