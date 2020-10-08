const { gql } = require('apollo-server');

const gestion_notas_type_def = gql`
  
    type notasGestion {
        idNotas: Int!
        idCursoEstudiante: String!
        idMateria: String!
        idProfesor: String!
        notasValor: Float!
        notasPorcentaje:String!
        notasPeriodo:String!
        notasComentario:String!
    }

    input notasGestionInput {
        idCursoEstudiante: String!
        idMateria: String!
        idProfesor: String!
        notaValor: String!
        notaPorcentaje:String!
        notaPeriodo:String!
        notaComentario:String!
    }
    input notasUpdateInput {
        notaValor: String!
        notaPorcentaje:String!
        notaPeriodo:String!
        notaComentario:String!
    }
    type Query{
        getNota(id: Int!): notasGestion!
    }    

    type Mutation {
        createNota(notasGestionInput: notasGestionInput!): Int! 
        updateNota(id: Int!, notasUpdateInput: notasUpdateInput!): notasGestion!
        deleteNota(id: Int!): Int!
    }
`;

module.exports = gestion_notas_type_def; 