//Se llama al typedef (esquema) de cada submodulo
const notasTypeDefs = require('./gestion_notas_type_defs');

//Se unen
const schemasArrays = [notasTypeDefs];

//Se exportan
module.exports = schemasArrays; 