const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

function ClassroomsMapping(data) {
    var newData = [];
    for (i = 0; i < data.length; i++)
        newData[i] = { id: data[i].id, capacity: data[i].capacity, description: data[i].description }
    return newData;
}

function ClassroomMapping(data) {
    return { capacity: data.capacity, description: data.description };
}

function ClassroomCreatedMapping(data) {
    return { id: data.id, capacity: data.capacity, description: data.description };
}


class Classroom_api extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `http://${serverConfig.coursesUrl}:${serverConfig.coursesPort}`;
    }

    async getallClassrooms() {
        return ClassroomsMapping(await this.get(`/classroom`));
    }

    async createClassroom(course) {
        return ClassroomCreatedMapping(await this.post(`/cursos`, ClassroomMapping(course)));
    }

}

module.exports = Classroom_api;