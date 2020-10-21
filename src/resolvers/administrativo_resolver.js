const administrativoResolver = {
    Query: {
        allAdministrativos: (_, __, { dataSources }) => dataSources.administrativoAPI.getAllAdministrativos(),
        administrativoById: (_, { id }, { dataSources }) => dataSources.administrativoAPI.getAdministrativoById(id)
    },
    Mutation: {
        createAdministrativo: function(_, { administrativo }, { dataSources }) {
            return dataSources.administrativoAPI.createAdministrativo(administrativo);
        },
        updateAdministrativo: (_, { id, administrativo }, { dataSources }) =>
            dataSources.administrativoAPI.updateAdministrativo(id, administrativo),
        deleteAdministrativo: (_, { id }, { dataSources }) => dataSources.administrativoAPI.deleteAdministrativo(id)
    }
};

module.exports = administrativoResolver;