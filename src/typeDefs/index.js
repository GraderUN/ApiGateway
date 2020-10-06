//Se llama al typedef (esquema) de cada submodulo
const courseTypeDefs = require('./course_type_defs');
const userTypeDefs = require('./user_type_defs');
const notasTypeDefs = require('./notas_type_defs');
const classroomTypeDefs = require('./classroom_type_defs');
const generalTypeDefs = require('./mutationsYQuerys');

const schemasArrays = [generalTypeDefs, courseTypeDefs, classroomTypeDefs, notasTypeDefs];
module.exports = schemasArrays;