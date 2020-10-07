const coursesResolver = require('./courses_resolver');
const notasResolver = require('./notas_resolver');
const classroomResolver = require('./classroom_resolver');
const subjectResolver = require('./subject_resolver');
const lodash = require('lodash');

module.exports = lodash.merge(
    //coursesResolver,
    //classroomResolver,
    //notasResolver,
    subjectResolver,
);
