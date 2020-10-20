const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

function AdministrativesMapping(data) {
  var newData = [];
  for (i = 0; i < data.length; i++)
    newData[i] = { id: data[i].id_administrativo, nombre: data[i].nombre, apellido: data[i].apellido, edad: data[i].edad,
      telefono: data[i].telefono, email: data[i].email };
  return newData;
}

function AdministrativeMapping(data) {
  return { id: data.id_administrativo, nombre: data.nombre, apellido: data.apellido, edad: data.edad, telefono: data.telefono,
    email: data.email };
}

function CreateAdministrativeMapping(data) {
  return { nombre: data.nombre, apellido: data.apellido, edad: data.edad, telefono: data.telefono, email: data.email };
}

class AdministrativoAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = `http://${serverConfig.administrativoUrl}:${serverConfig.administrativoPort}`;
  }

  async getAdministrativoById(id) {
    return AdministrativeMapping(await this.get(`/v1/administrativo/${id}`));
  }

  async getAllAdministrativos() {
    return AdministrativesMapping(await this.get(`/v1/administrativos`));
  }

  async createAdministrativo(administrativo) {
    return await this.post(`/v1/administrativo`, CreateAdministrativeMapping(administrativo));
  }

  //completar
  async updateAdministrativo(id, administrativo) {
    return await this.put(`/v1/administrativo/${id}`, CreateAdministrativeMapping(administrativo));
  }

  async deleteAdministrativo(id) {
    return await this.delete(`/v1/administrativo/${id}`);
  }

}

module.exports = AdministrativoAPI;