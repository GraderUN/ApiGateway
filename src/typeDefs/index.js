//Se llama al typedef (esquema) de cada submodulo
const estudianteTypeDefs = require('./estudiante_type_defs');
const profesorTypeDefs = require('./profesor_type_defs');
const administrativoTypeDefs = require('./administrativo_type_defs');

//Se unen
const schemasArrays = [estudianteTypeDefs, profesorTypeDefs, administrativoTypeDefs];

//Se exportan
module.exports = schemasArrays; 