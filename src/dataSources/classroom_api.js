const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

function ClassroomsMapping(data) {
    var newData = [];
    console.log(data);
    for (i = 0; i < data.length; i++)
        newData[i] = { id : data[i].id, capacidad: data[i].capacidad, description: data[i].description }
    return newData;
}

function ClassroomMapping(data) {
    return { capacidad: data.capacidad, description: data.description };
}
function AssignementsMapping(data) {
    var newData = [];

    for (let i = 0; i < data.length; i++) {
        newData[i] = {
            id: data[i].id, curso: data[i].curso, salon: data[i].salon,
            profesor: data[i].profesor, horario: data[i].horario, materia: data[i].materia
        }
    }
    return newData;
}

function AssignementMapping(data) {
    return { curso: data.curso, salon: data.salon,
        profesor: data.profesor , horario: data.horario, materia: data.materia };
}
class ClassroomApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `http://${serverConfig.classroomUrl}:${serverConfig.classromPort}`;
    }

    async getallClassrooms() {
        return ClassroomsMapping(await this.get(`/classroom`));
    }

    async createClassroom(classroom) {
        return (await this.post(`/classroom`, ClassroomMapping(classroom)));
    }

    async getallAssignemets() {
        return AssignementsMapping(await this.get(`/assignations`));
    }

    async createAssignement(assignement) {
        return (await this.post(`/assignations`, AssignementMapping(assignement)));
    }

    async getallAssignemetsByProfessor(professorID) {
        return AssignementsMapping(await this.get(`/assignations/professor/${professorID}`));
    }

    async getallAssignemetsByCourse(courseID) {
        return AssignementsMapping(await this.get(`/assignations/course/${courseID}`));
    }

    async getallAssignemetsByClassroom(classroomID) {
        return AssignementsMapping(await this.get(`/assignations/course/${classroomID}`));
    }
    async deleteAssignement(id) {
        return await this.delete(`/assignations/${id}`);
    }
    async deleteClassroom(id) {
        return await this.delete(`/classroom/${id}`);
    }

}

module.exports = ClassroomApi;
