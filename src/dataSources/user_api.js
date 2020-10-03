const { RESTDataSource } = require('apollo-datasource-rest');
//import { url, port, entryPoint } from '../server.js';
const serverConfig = require('../server');


class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://${serverConfig.url}:${serverConfig.port}/${serverConfig.entryPoint}`;
    
  }

  //Realiza una peticion get para obtener todos los usuarios
  async getAllUser() {
    const response = await this.get('users');
    return Array.isArray(response)
      ? response.map(user => this.userReducer(user))
      : [];
  }

  //Peticion get para obtener un usu
  async getUserbyId(id){
    const response = await this.get(`users/${id}`);
    return this.userReducer(response);
  }

  async createUser(user){
    user = new Object(JSON.parse(JSON.stringify(user)));
    const response = await this.post('users', user);
    return this.userReducer(response);
  }


  async updateUser(id, user){
    user = new Object(JSON.parse(JSON.stringify(user)));
    const response = await this.put(`users/${id}`, user);
    return this.userReducer(response);
  }

  async deleteUser(id){
    const response = await this.delete(`users/${id}`);
    return this.userReducer(response);
  }

  //Le da el formato necesario a la salida
  userReducer(user) {
    return {
      id: user.id || 0,
      firstName: user.firstName,  
      lastName: user.lastName,
      username: user.username,
      password: user.password
    };
  }

  
}

module.exports = UserAPI;