const gestion_notas_resolver = {
    Query: {
        getNotabyId: function(_, { id }, { dataSources }) {
            return dataSources.notasGestionAPI.getNotabyId(id);
        },
        getTipoNotabyId: function(_, { id }, { dataSources }) {
            return dataSources.notasGestionAPI.getTipoNotabyId(id);
        },
        getTipoNotas: function(_, __, { dataSources }) {
            return dataSources.notasGestionAPI.getTipoNotas();
        }
     },
    Mutation: {
        createNota: function(_, { notasGestionInput }, { dataSources }) {
            return dataSources.notasGestionAPI.createNota(notasGestionInput);
        },
        updateNota: (_, { id, notasUpdateInput }, { dataSources }) => dataSources.notasGestionAPI.updateNota(id, notasUpdateInput),
        deleteNota: (_, { id }, { dataSources }) => dataSources.notasGestionAPI.deleteNota(id),
        createTipoNota: function(_, { tipoNotasGestionInput }, { dataSources }) {
            return dataSources.notasGestionAPI.createTipoNota(tipoNotasGestionInput);
        },updateTipoNota: (_, { id, tipoNotasUpdateInput }, { dataSources }) => dataSources.notasGestionAPI.updateTipoNota(id, tipoNotasUpdateInput),
        deleteTipoNota: (_, { id }, { dataSources }) => dataSources.notasGestionAPI.deleteTipoNota(id)

    }
};

module.exports = gestion_notas_resolver;