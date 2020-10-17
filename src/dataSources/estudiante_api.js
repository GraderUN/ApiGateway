const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

function StudentsMapping(data) {
  var newData = [];
  for (i = 0; i < data.length; i++)
    newData[i] = { id: data[i].id_estudiante, nombre: data[i].nombre, apellido: data[i].apellido, edad: data[i].edad,
      sexo: data[i].sexo, nombreTutor: data[i].nombreTutor, apellidoTutor: data[i].apellidoTutor,
      telefonoTutor: data[i].telefonoTutor, emailTutor: data[i].emailTutor };
  return newData;
}

function StudentMapping(data) {
  return { id: data.id_estudiante, nombre: data.nombre, apellido: data.apellido,
    edad: data.edad, sexo: data.sexo, nombreTutor: data.nombreTutor,
    apellidoTutor: data.apellidoTutor, telefonoTutor: data.telefonoTutor,
    emailTutor: data.emailTutor };
}

function CreateStudentMapping(data) {
  return { nombre: data.nombre, apellido: data.apellido, edad: data.edad, sexo: data.sexo,
    nombreTutor: data.nombreTutor, apellidoTutor: data.apellidoTutor, telefonoTutor: data.telefonoTutor,
    emailTutor: data.emailTutor };
}

function StudentCreatedMapping(data) {
  return { id: data.id_estudiante, nombre: data.nombre, apellido: data.apellido, edad: data.edad, sexo: data.sexo,
    nombreTutor: data.nombreTutor, apellidoTutor: data.apellidoTutor, telefonoTutor: data.telefonoTutor,
    emailTutor: data.emailTutor };
}

class EstudianteAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = `http://${serverConfig.estudianteUrl}:${serverConfig.estudiantePort}`;
  }

  async getEstudianteById(id) {
    return StudentMapping(await this.get(`/estudiante/${id}`));
  }

  async getAllEstudiantes() {
    return StudentsMapping(await this.get(`/estudiantes`));
  }

  async createEstudiante(estudiante) {
    return StudentCreatedMapping(await this.post(`/estudiante`, CreateStudentMapping(estudiante)));
  }
  //completar
  async updateEstudiante(estudiante) {
    return StudentMapping(await this.put(`/estudiante/${estudiante.id}`));
  }

  async deleteEstudiante(id) {
    return StudentMapping(await this.delete(`/estudiante/${id}`));
  }

}

module.exports = EstudianteAPI;