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
        getPromedioEstudianteMateriaPeriodo(notasIdEstudiante: Int!,
            notasIdMateria: Int!, notasPeriodo: Int!): Float!
        getPromedioEstudianteMateria(notasIdEstudiante: Int!,
            notasIdMateria: Int!): Float!
        getPromedioEstudiante(notasIdEstudiante: Int!): Float!
        promedioCurso(notasIdCurso: Int!): Float!
        estadisticasCurso(notasIdCurso: Int!): [estadisticas]!
        allUsers: [User]!
    }

    type Mutation {
        
    }
`;

module.exports = notasTypeDefs;