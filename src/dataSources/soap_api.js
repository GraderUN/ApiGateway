const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

function PuntajeMapping(data) {
    var newData = [];
    for (i = 0; i < data.length; i++)
        newData[i] = { email : data[i].email, name: data[i].name, puntaje: data[i].puntaje }
    return newData;
}

class SoapAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `http://${serverConfig.soapUrl}:${serverConfig.soapPort}`;
    }

    async getPuntage() {
        return PuntajeMapping(await this.get(`/`)); // '/' for production, '/fake' for mocks 
    }
}

module.exports = SoapAPI;