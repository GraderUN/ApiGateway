//Se llama al typedef (esquema) de cada submodulo
const courseTypeDefs = require('./course_type_defs');

//Se unen
const schemasArrays = [courseTypeDefs];

//Se exportan
module.exports = schemasArrays;