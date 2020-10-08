const { gql } = require('apollo-server');

const gestion_notas_type_def = gql`
  
    type notasGestion {
        notasId: Int!
        notasIdCursoEstudiante : String!
        idMateria: String!
        idProfesor: String!
        notasValor: Float!
        notasPorcentaje:String!
        notasPeriodo:String!
        notasComentarios:String!
    }

    input notasGestionInput {
        idCursoEstudiante: Int!
        idMateria: Int!
        idProfesor: Int!
        notaValor: Float!
        notaPorcentaje:Int!
        notaPeriodo:Int!
        notaComentario:String!
    }
    input notasUpdateInput {
        notaValor: Float!
        notaPorcentaje: Int!
        notaPeriodo: Int!
        notaComentario: String!
    }

`;

module.exports = gestion_notas_type_def; 