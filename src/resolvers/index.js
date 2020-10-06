const coursesResolver = require('./courses_resolver');
const classroomResolver = require('./classroom_resolver')
const lodash = require('lodash');
const resolvers = lodash.merge(coursesResolver, classroomResolver);


module.exports = resolvers;