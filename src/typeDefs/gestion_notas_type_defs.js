const { gql } = require('apollo-server');

const gestion_notas_type_def = gql`
  
    type notasGestion {
        notasId: Int!
        notasIdEstudiante : String!
        notastipoNotasId: String!
        notasValor: Float!
        notasPorcentaje: String!
        notasPeriodo: String!
        notasComentarios: String!
    }

    type tipoNotasGestion {
        tipoNotasId : Int!
        tipoNotasNombre : String!
        tipoNotasIdClase : String!
    }

    input notasGestionInput {
        notaIdEstudiante : String!
        notaTipoNotasId: String!
        notaValor: Float!
        notaPorcentaje:Int!
        notaPeriodo:Int!
        notaComentario:String!
    }

    input tipoNotasGestionInput {
        tipoNotasNombre : String!
        tipoNotasIdClase: String!
    }

    input notasUpdateInput {
        notaValor: Float!
        notaPorcentaje: Int!
        notaPeriodo: Int!
        notaComentario: String!
    }

    input tipoNotasUpdateInput {
        tipoNotasNombre: String!
        tipoNotasIdClase: String!
    }
`;

module.exports = gestion_notas_type_def; 