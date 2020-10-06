//Se llama al typedef (esquema) de cada submodulo
const courseTypeDefs = require('./course_type_defs');
const classroomTypeDefs = require('./classroom_type_defs');
const generalTypeDefs = require('./mutationsYQuerys')
//Se unen
const schemasArrays = [generalTypeDefs , courseTypeDefs , classroomTypeDefs];

//Se exportan
module.exports = schemasArrays;