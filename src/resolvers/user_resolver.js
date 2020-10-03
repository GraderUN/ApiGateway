const userResolver = {
    Query: {
        allUsers: (_, __, { dataSources }) => dataSources.userAPI.getAllUser(),
        userById: (_, { id }, { dataSources }) => dataSources.userAPI.getUserbyId(id)
    },
    Mutation: {
        createUser: function(_, { user }, { dataSources }) {
            return dataSources.userAPI.createUser(user);
        },
        updateUser: (_, { id, user }, { dataSources }) => dataSources.userAPI.updateUser(id, user),
        deleteUser: (_, { id }, { dataSources }) => dataSources.userAPI.deleteUser(id)
    }
};



module.exports = userResolver;