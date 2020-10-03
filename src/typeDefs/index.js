//Se llama al typedef (esquema) de cada submodulo
const userTypeDefs = require('./user_type_defs');

//Se unen
const schemasArrays = [userTypeDefs];

//Se exportan
module.exports = schemasArrays; 