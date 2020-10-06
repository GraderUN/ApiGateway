const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');



class NotasAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://${serverConfig.notasUrl}:${serverConfig.notasPort}`;
  }

  async getPromedioEstudianteMateriaPeriodo(datosEstudianteMateriaPeriodo) {
    return (await this.get(`/promedioEstudianteMateriaPeriodo/${datosEstudianteMateriaPeriodo.notasIdEstudiante}
    /${datosEstudianteMateriaPeriodo.notasIdMateria}/${datosEstudianteMateriaPeriodo.notasPeriodo}`));
  }

  async getPromedioEstudianteMateria(datosEstudianteMateria) {
    return (await this.get(`/promedioEstudianteMateria/${datosEstudianteMateria.notasIdEstudiante}
    /${datosEstudianteMateria.notasIdMateria}`));
  }

  async getPromedioEstudiante(datosEstudiante) {
    return (await this.get(`/promedioEstudiante/${datosEstudiante.notasIdEstudiante}`));
  }

  async getPromedioCurso(datosCurso) {
    return (await this.get(`/promedioCurso/${datosCurso.notasIdCurso}`));
  }
}

module.exports = NotasAPI;