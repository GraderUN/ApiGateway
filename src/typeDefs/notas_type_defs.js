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

    input datosEstudiante {
        notasIdEstudiante: Int!
        notasIdMateria: Int!
        notasPeriodo: Int!
    }
    
    type estadisticas {
        promedio: Int!
        otraCosa: Int!
    }
`;

module.exports = notasTypeDefs;