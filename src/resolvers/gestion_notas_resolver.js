const gestion_notas_resolver = {
    Query: {
        getNota: function(_, { id }, { dataSources }) {
            return dataSources.notasGestionAPI.getNota(id);
        },
     },
    Mutation: {
        createNota: function(_, { notasGestionInput }, { dataSources }) {
            return dataSources.notasGestionAPI.createNota(notasGestionInput);
        },
        updateNota: (_, { id, notasUpdateInput }, { dataSources }) => dataSources.notasGestionAPI.updateUser(id, notasUpdateInput),
        deleteNota: (_, { id }, { dataSources }) => dataSources.notasGestionAPI.deleteUser(id)
    }
};

module.exports = gestion_notas_resolver;