const coursesResolver = require('./courses_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(coursesResolver);

module.exports = resolvers;