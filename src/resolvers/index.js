const gestion_notas_resolver = require('./gestion_notas_resolver');
const lodash = require('lodash');


const resolvers = lodash.merge(gestion_notas_resolver);

module.exports = resolvers;