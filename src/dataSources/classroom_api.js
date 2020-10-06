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
function AssignementsMapping(data) {
    var newData = [];
    for (i = 0; i < data.length; i++)
        newData[i] = { id: data[i].id, course: data[i].course, classroom: data[i].classroom,
        proffesor: data[i].proffesor , horario: data[i].horario, materia: data[i].materia
        }
    return newData;
}

function AssignementMapping(data) {
    return { course: data.course, classroom: data.classroom,
        proffesor: data.proffesor , horario: data.horario, materia: data.materia };
}

function AssignementCreatedMapping(data){
    return {course: data.course, classroom: data.classroom,
        professor: data.professor , horario: data.horario, materia: data.materia };
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
        return ClassroomCreatedMapping(await this.post(`/classroom`, ClassroomMapping(classroom)));
    }

    async getallAssignemets() {
        return AssignementsMapping(await this.get(`/assignations`));
    }

    async createAssignement(assignement) {
        return ClassroomCreatedMapping(await this.post(`/assignations`, ClassroomMapping(assignement)));
    }

    async getallAssignemetsByProfessor(proffesorID) {
        return AssignementsMapping(await this.get(`/assignations/proffesor/${proffesorID}`));
    }

    async getallAssignemetsByCourse(courseID) {
        return AssignementsMapping(await this.get(`/assignations/course/${courseID}`));
    }

    async getallAssignemetsByClassroom(classroomID) {
        return AssignementsMapping(await this.get(`/assignations/course/${classroomID}`));
    }
}

module.exports = ClassroomApi;