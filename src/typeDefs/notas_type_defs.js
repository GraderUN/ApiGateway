const { gql } = require('apollo-server');

const notasTypeDefs = gql`
    type nota {
        notasId: Int!
        notasIdCurso: Int!
        notasIdEstudiante: Int!
        notasIdMateria: Int!
        notasIdProfesor: Int!
        notasValor: Float!
        notasPorcentaje: Int!
        notasPeriodo: Int!
        NotasComentarios: String
    }
    
    type estadisticas {
        promedio: Int!
        otraCosa: Int!
    }

    type Query {
        PromedioEstudianteMateriaPeriodo(notasIdEstudiante: Int!,
            notasIdMateria: Int!, notasPeriodo: Int!): Float!
        PromedioEstudianteMateria(notasIdEstudiante: Int!,
            notasIdMateria: Int!): Float!
        PromedioEstudiante(notasIdEstudiante: Int!): Float!
        promedioCurso(notasIdCurso: Int!): Float!
        estadisticasCurso(notasIdCurso: Int!): [estadisticas]!
    }
`;

module.exports = notasTypeDefs;