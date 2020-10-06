const coursesResolver = require('./courses_resolver');
const AuthResolver = require('./auth_resolver')
const lodash = require('lodash');
const resolvers = lodash.merge(coursesResolver, AuthResolver);

module.exports = resolvers;