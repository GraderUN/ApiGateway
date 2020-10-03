const userResolver = require('./user_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(userResolver);

module.exports = resolvers;