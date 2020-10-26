const { RESTDataSource } = require('apollo-datasource-rest');
//import { url, port, entryPoint } from '../server.js';
const serverConfig = require('../server');


function NotaMapping(data){
  return { notasId: data.notasId, notasIdEstudiante: data.notasIdEstudiante
    , notastipoNotasId: data.notastipoNotasId, notasValor: data.notasValor
    , notasPorcentaje: data.notasPorcentaje, notasPeriodo: data.notasPeriodo
    , notasComentarios: data.notasComentarios};
}
function TipoNotasMapping(data){
    var newData = [];
    for (i = 0; i < data.length; i++)
      newData[i] = {
        tipoNotasId: data[i].tipoNotasId,
        tipoNotasNombre: data[i].tipoNotasNombre,
        tipoNotasIdClase: data[i].tipoNotasIdClase,
    };
    return newData;

}
function TipoNotaMapping(data){
  return { tipoNotasId: data.tipoNotasId, tipoNotasNombre: data.tipoNotasNombre
    , tipoNotasIdClase: data.tipoNotasIdClase};
}

class notasGestionAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://${serverConfig.gestionNotasUrl}:${serverConfig.gestionNotasPort}`;
    
  }

  //Realiza una peticion get para obtener todos los usuarios
 
  /* 
 //Peticion get para obtener un usu
  async getUserbyId(id){
    const response = await this.get(`users/${id}`);
    return this.userReducer(response);
  }
  */
  async getTipoNotas() {
    const response = await this.get(`tipoNotas.php`);
    return TipoNotasMapping(response);
  }
  async getNotabyId(numero){
    const response = await this.get(`notas.php?idNota=${numero}`);
    return NotaMapping(response);
  }

  async getTipoNotabyId(numero){
    const response = await this.get(`tipoNotas.php?tipoNotaId=${numero}`);
    return TipoNotaMapping(response);
  }

  async createNota(notasGestionInput){
    var nota = new Object(JSON.parse(JSON.stringify(notasGestionInput)));
    var response = await this.post('notas.php', nota);
   return response.id;
  }
  async createTipoNota(tipoNotasGestionInput){
    var nota = new Object(JSON.parse(JSON.stringify(tipoNotasGestionInput)));
    var response = await this.post('tipoNotas.php', nota);
   return response.id;
  }
  async updateNota(id, notasUpdateInput){
    var notaUpdate = new Object(JSON.parse(JSON.stringify(notasUpdateInput)));
    const response = await this.put(`notas.php?idNota=${id}`, notaUpdate);
    return response.notasId;
   // return NotaMapping(response);
  }
  async updateTipoNota(id, tipoNotasUpdateInput){
    var tipoNotaUpdate = new Object(JSON.parse(JSON.stringify(tipoNotasUpdateInput)));
    const response = await this.put(`tipoNotas.php?tipoNotaId=${id}`, tipoNotaUpdate);
    return response.tipoNotasId;
   // return NotaMapping(response);
  }

  async deleteNota(id){
    const response = await this.delete(`notas.php?idNota=${id}`);
    return response.id;
  }

  async deleteTipoNota(id){
    const response = await this.delete(`tipoNotas.php?tipoNotaId=${id}`);
    return response.id; 
  }  
}

module.exports = notasGestionAPI;