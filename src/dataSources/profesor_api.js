const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

function ProfessorsMapping(data) {
  var newData = [];
  for (i = 0; i < data.length; i++)
    newData[i] = { id: data[i].id_profesor, nombre: data[i].nombre, apellido: data[i].apellido, edad: data[i].edad,
      telefono: data[i].telefono, email: data[i].email };
  return newData;
}

function ProfessorMapping(data) {
  return { id: data.id_profesor, nombre: data.nombre, apellido: data.apellido, edad: data.edad, telefono: data.telefono,
    email: data.email };
}

function CreateProfessorMapping(data) {
  return { nombre: data.nombre, apellido: data.apellido, edad: data.edad, telefono: data.telefono, email: data.email };
}

function ProfessorCreatedMapping(data) {
  return { id: data.id_profesor, nombre: data.nombre, apellido: data.apellido, edad: data.edad, telefono: data.telefono,
    email: data.email };
}

class ProfesorAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = `http://${serverConfig.profesorUrl}:${serverConfig.profesorPort}`;
  }

  async getProfesorById(id) {
    return ProfessorMapping(await this.get(`/profesor/${id}`));
  }

  async getAllProfesores() {
    return ProfessorsMapping(await this.get(`/profesores`));
  }

  async createProfesor(profesor) {
    return ProfessorCreatedMapping(await this.post(`/profesor`, CreateProfessorMapping(profesor)));
  }

  //completar
  async updateProfesor(profesor) {
    return ProfessorMapping(await this.put(`/profesor/${profesor.id}`));
  }

  async deleteProfesor(id) {
    return ProfessorMapping(await this.delete(`/profesor/${id}`));
  }

}

module.exports = ProfesorAPI;