const notasResolver = {
    Query: {

        NotasEstudianteClasePeriodo: function(_, {datosEstudianteClasePeriodo}, { dataSources }) {
            return dataSources.NotasAPI.getNotasEstudianteClasePeriodo(datosEstudianteClasePeriodo);
        },

        NotasEstudianteClase: function(_, {datosEstudianteClase}, { dataSources }) {
            return dataSources.NotasAPI.getNotasEstudianteClase(datosEstudianteClase);
        },

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
            return dataSources.NotasAPI.getEstadisticasCurso(notasIdCurso);
        },

    },
    Mutation: {

    }
};



module.exports = notasResolver;
