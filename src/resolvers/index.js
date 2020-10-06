const coursesResolver = require('./courses_resolver');
const notasResolver = require('./notas_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(coursesResolver, notasResolver);

module.exports = resolvers;