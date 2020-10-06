const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

function NotasMapping(data) {
  var newData = [];
  for (let i = 0; i < data.length; i++)
    newData[i] = { notasId: data[i].notasId, notasIdCurso:data[i].notasIdCursoEstudiante,
      notasIdEstudiante: data[i].notasIdCursoEstudiante, notasIdMateria:data[i].notasIdMateria,
      notasIdProfesor:data[i].notasIdProfesor, notasValor: data[i].otasValor,
      notasPorcentaje: data[i].notasPorcentaje, notasPeriodo:data[i].notasPeriodo,
      NotasComentarios:data[i].NotasComentarios}
  return newData;
}


class NotasAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://${serverConfig.notasUrl}:${serverConfig.notasPort}`;
  }

  async getPromedioEstudianteMateriaPeriodo(id) {
    return NotasMapping(await this.get(`/promedioEstudianteMateriaPeriodo/${estudianteId}/${notasIdMateria}/${notasPeriodo}`));
  }

  async getPromedioEstudianteMateria() {
    return NotasMapping(await this.get(`/promedioEstudianteMateria/${estudianteId}/${notasIdMateria}`));
  }

  async getPromedioEstudiante() {
    return NotasMapping(await this.get(`/promedioEstudiante/${estudianteId}`));
  }

  async getPromedioCurso() {
    return NotasMapping(await this.get(`/promedioCurso/${cursoId}`));
  }
}

module.exports = NotasAPI;