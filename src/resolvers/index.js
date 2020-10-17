const estudianteResolver = require('./estudiante_resolver');
const profesorResolver = require('./profesor_resolver');
const administrativoResolver = require('./administrativo_resolver');
const lodash = require('lodash');
const resolvers1 = lodash.merge(estudianteResolver);
const resolvers2 = lodash.merge(profesorResolver);
const resolvers3 = lodash.merge(administrativoResolver);

module.exports = resolvers1;
module.exports = resolvers2;
module.exports = resolvers3;