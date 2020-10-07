const coursesResolver = require('./courses_resolver');
const notasResolver = require('./notas_resolver');
const classroomResolver = require('./classroom_resolver')
const AuthResolver = require('./auth_resolver')

const lodash = require('lodash');
const resolvers = lodash.merge(coursesResolver, classroomResolver, notasResolver,AuthResolver);
module.exports = resolvers;