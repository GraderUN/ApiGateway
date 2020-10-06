const notasResolver = {
    Query: {
        allNotas: (_, __, { dataSources }) => dataSources.userAPI.getAllUser(),
        notaById: (_, { id }, { dataSources }) => dataSources.userAPI.getUserbyId(id)
    },
    Mutation: {
        crearNota: function(_, {  }, { }) {
        },

    }
};



module.exports = notasResolver;