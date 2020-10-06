const coursesResolver = require('./courses_resolver');
const notasResolver = require('./notas_resolver');
const classroomResolver = require('./classroom_resolver')
const lodash = require('lodash');

const resolvers = lodash.merge(coursesResolver, classroomResolver, notasResolver);
module.exports = resolvers;