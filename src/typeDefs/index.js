//Se llama al typedef (esquema) de cada submodulo
const courseTypeDefs = require('./course_type_defs');

const userTypeDefs = require('./user_type_defs');
const notasTypeDefs = require('./notas_type_defs');
//Se unen
const schemasArrays = [courseTypeDefs, userTypeDefs, notasTypeDefs];

//Se exportan
module.exports = schemasArrays;