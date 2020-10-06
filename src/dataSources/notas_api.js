const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');



class NotasAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://${serverConfig.notasUrl}:${serverConfig.notasPort}`;
  }

  async getPromedioEstudianteMateriaPeriodo(datosEstudiante) {
    console.log("datosEstudiante:")
    console.log(datosEstudiante)
    return (await this.get(`/promedioEstudianteMateriaPeriodo/${datosEstudiante.notasIdEstudiante}/${datosEstudiante.notasIdMateria}/${datosEstudiante.notasPeriodo}`));
  }

  async getPromedioEstudianteMateria() {
    return (await this.get(`/promedioEstudianteMateria/${estudianteId}/${notasIdMateria}`));
  }

  async getPromedioEstudiante() {
    return (await this.get(`/promedioEstudiante/${estudianteId}`));
  }

  async getPromedioCurso() {
    return (await this.get(`/promedioCurso/${cursoId}`));
  }
}

module.exports = NotasAPI;