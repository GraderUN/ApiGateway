const estudianteResolver = require('./estudiante_resolver');
const profesorResolver = require('./profesor_resolver');
const administrativoResolver = require('./administrativo_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(estudianteResolver, administrativoResolver, profesorResolver);

module.exports = resolvers;