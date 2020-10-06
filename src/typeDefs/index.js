//Se llama al typedef (esquema) de cada submodulo
const userTypeDefs = require('./user_type_defs');
const notasTypeDefs = require('./notas_type_defs');
//Se unen
const schemasArrays = [userTypeDefs, notasTypeDefs];

//Se exportan
module.exports = schemasArrays; 