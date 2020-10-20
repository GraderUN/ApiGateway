const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

function StudentsMapping(data) {
    var newData = [];
    for (i = 0; i < data.length; i++)
        newData[i] = {
            id: data[i].id_estudiante,
            nombre: data[i].nombre,
            apellido: data[i].apellido,
            edad: data[i].edad,
            sexo: data[i].sexo,
            nombreTutor: data[i].nombre_tutor,
            apellidoTutor: data[i].apellido_tutor,
            telefonoTutor: data[i].telefono_tutor,
            emailTutor: data[i].email_tutor
        };
    return newData;
}

function StudentMapping(data) {
    return {
        id: data.id_estudiante,
        nombre: data.nombre,
        apellido: data.apellido,
        edad: data.edad,
        sexo: data.sexo,
        nombreTutor: data.nombre_tutor,
        apellidoTutor: data.apellido_tutor,
        telefonoTutor: data.telefono_tutor,
        emailTutor: data.email_tutor
    };
}

function CreateStudentMapping(data) {
    return {
        nombre: data.nombre,
        apellido: data.apellido,
        edad: data.edad,
        sexo: data.sexo,
        nombre_tutor: data.nombreTutor,
        apellido_tutor: data.apellidoTutor,
        telefono_tutor: data.telefonoTutor,
        email_tutor: data.emailTutor
    };
}

class EstudianteAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = `http://${serverConfig.administrativoUrl}:${serverConfig.administrativoPort}`;
    }

    async getEstudianteById(id) {
        return StudentMapping(await this.get(`/v1/estudiante/${id}`));
    }

    async getAllEstudiantes() {
        return StudentsMapping(await this.get(`/v1/estudiantes`));
    }

    async createEstudiante(estudiante) {
      console.log(CreateStudentMapping(estudiante))
      return await this.post(`/v1/estudiante`, CreateStudentMapping(estudiante));
    }
    //completar

    async updateEstudiante(id, estudiante) {
        return await this.put(`/v1/estudiante/${id}`, CreateStudentMapping(estudiante));
    }

    async deleteEstudiante(id) {
        return await this.delete(`/v1/estudiante/${id}`);
    }

}

module.exports = EstudianteAPI;