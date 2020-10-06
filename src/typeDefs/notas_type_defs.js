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
    
    input datosEstudianteMateriaPeriodo {
        notasIdEstudiante: Int!
        notasIdMateria: Int!
        notasPeriodo: Int!
    }

    input datosEstudianteMateria {
        notasIdEstudiante: Int!
        notasIdMateria: Int!
    }

    input datosEstudiante {
        notasIdEstudiante: Int!
    }
    
    input datosCurso {
        notasIdCurso: Int!
    }
    
    type estadisticas {
        promedio: Int!
        otraCosa: Int!
    }
`;

module.exports = notasTypeDefs;