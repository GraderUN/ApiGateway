const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');



class NotasAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://${serverConfig.notasUrl}:${serverConfig.notasPort}`;
  }

  async getNotasEstudianteClasePeriodo(datosEstudianteClasePeriodo) {
    return (await this.get(`/notasEstudianteClasePeriodo/${datosEstudianteClasePeriodo.estudianteId}
    /${datosEstudianteClasePeriodo.claseId}/${datosEstudianteClasePeriodo.periodo}`));
  }

  async getNotasEstudianteClase(datosEstudianteClase) {
    return (await this.get(`/notasEstudianteClase/${datosEstudianteClase.estudianteId}/${datosEstudianteClase.claseId}`));
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

  async getEstadisticasCurso(notasIdCurso) {
    return await this.get(`/estadisticasCurso/${notasIdCurso.notasIdCurso}`);
  }
}

module.exports = NotasAPI;
