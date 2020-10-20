const authResolver = {
    Mutation: {
        createUser: function(_, { user }, { dataSources }) {
            return dataSources.authAPI.createUser(user);
        },
        deleteUser: (_, { user }, { dataSources }) => dataSources.authAPI.deleteUser(user),
        updateEmail: (_, { update }, { dataSources }) => dataSources.authAPI.updateEmail(update)
    }
};

module.exports = authResolver;