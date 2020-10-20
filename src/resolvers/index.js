const gestion_notas_resolver = require('./gestion_notas_resolver');
const coursesResolver = require('./courses_resolver');
const notasResolver = require('./notas_resolver');
const classroomResolver = require('./classroom_resolver')
const AuthResolver = require('./auth_resolver')
const subjectResolver = require('./subject_resolver');
const lodash = require('lodash');
const estudianteResolver = require('./estudiante_resolver');
const profesorResolver = require('./profesor_resolver');
const administrativoResolver = require('./administrativo_resolver');

module.exports = lodash.merge(
    coursesResolver,
    classroomResolver,
    notasResolver,
    subjectResolver,
    AuthResolver,
    gestion_notas_resolver,
    estudianteResolver,
    administrativoResolver,
    profesorResolver
);