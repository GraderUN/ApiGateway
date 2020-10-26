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
        notasComentarios: String
    }
    
    type estadisticas {
        UltimoPuesto: Float!
        PrimerPuesto: Float!
    }
    
    type notaDatos {
        notasId: Int!
        notasIdEstudiante: Int!
        notastipoNotasId: Int!
        notasValor: Float!
        notasPorcentaje: Int!
        notasPeriodo: Int!
        notasComentarios: String
        tipoNotasId: Int!
        tipoNotasNombre: String!
        tipoNotasIdClase: String!
    }
    
    input datosEstudianteClasePeriodo {
        estudianteId: Int!
        claseId: Int!
        periodo: Int!
    }

    input datosEstudianteClase{
        estudianteId: Int!
        claseId: Int!
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
`;

module.exports = notasTypeDefs;
