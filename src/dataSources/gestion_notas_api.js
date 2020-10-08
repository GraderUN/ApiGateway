const { RESTDataSource } = require('apollo-datasource-rest');
//import { url, port, entryPoint } from '../server.js';
const serverConfig = require('../server');


function NotaMapping(data){
  return { notasId: data.notasId, notasIdCursoEstudiante: data.notasIdCursoEstudiante
    , idMateria: data.notasIdMateria, idProfesor:data.notasIdProfesor
    , notasValor: data.notasValor, notasPorcentaje: data.notasPorcentaje, notasPeriodo: data.notasPeriodo
    , notasComentarios: data.NotasComentarios};
}

class notasGestionAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://${serverConfig.notasUrl}:${serverConfig.notasPort}`;
    
  }

  //Realiza una peticion get para obtener todos los usuarios
 
 /* async getAllUser() {
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
*/
  async getNota(numero){
    // nota = new Object(JSON.parse(JSON.stringify(notasGestionInput)));
    const response = await this.get(`notas.php?idNota=${numero}`);
    return NotaMapping(response);
  }

  async createNota(notasGestionInput){
    nota = new Object(JSON.parse(JSON.stringify(notasGestionInput)));
    const response = await this.post('notas.php', notasGestionInput);
    return response;
  }


  async updateUser(id, notasUpdateInput){
    user = new Object(JSON.parse(JSON.stringify(notasUpdateInput)));
    const response = await this.put(`notas.php?idNota=${id}`, notasUpdateInput);
    return response;
  }

  async deleteUser(id){
    const response = await this.delete(`notas.php?idNota=${id}`);
    return response;
  }
/*
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
*/
  
}

module.exports = notasGestionAPI;