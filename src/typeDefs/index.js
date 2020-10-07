const courseTypeDefs = require('./course_type_defs');
const notasTypeDefs = require('./notas_type_defs');
const classroomTypeDefs = require('./classroom_type_defs');
const generalTypeDefs = require('./mutationsYQuerys');
const authTypeDefs = require('./auth_type_defs');
const subjectTypeDefs = require('./subject_type_defs');

const schemasArrays = [
    generalTypeDefs,
    courseTypeDefs,
    classroomTypeDefs,
    notasTypeDefs,
    subjectTypeDefs,
    authTypeDefs,
];

module.exports = schemasArrays;
