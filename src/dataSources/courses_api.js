const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

function CoursesMapping(data) {
    var newData = [];
    for (i = 0; i < data.length; i++)
        newData[i] = { id: data[i].id, grade: data[i].grado, letter: data[i].letra }
    return newData;
}

function CourseMapping(data) {
    return { grade: data.grado, letter: data.letra, id_students: data.id_estudiante };
}

function CreateCourseMapping(data) {
    return { grado: data.grade, letra: data.letter };
}

function CourseCreatedMapping(data) {
    return { id: data.id, grade: data.grado, letter: data.letra };
}



function StudentsMapping(data) {
    var newData = [];
    for (i = 0; i < data.length; i++)
        newData[i] = { id: data[i].id_estudiante, id_course: data[i].id_curso, course: { grade: data[i].curso.grado, letter: data[i].curso.letra } }
    return newData;
}

function StudentMapping(data) {
    return { id: data.id_estudiante, id_course: data.id_curso, course: { grade: data.curso.grado, letter: data.curso.letra } };
}

function CreateStudentMapping(data) {
    return { id_estudiante: data.id, id_curso: data.id_course };
}



class CoursesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `http://${serverConfig.coursesUrl}:${serverConfig.coursesPort}`;
    }

    async getCourseById(id) {
        return CourseMapping(await this.get(`/cursos/${id}`));
    }

    async getallCourses() {
        return CoursesMapping(await this.get(`/cursos`));
    }

    async createCourse(course) {
        return CourseCreatedMapping(await this.post(`/cursos`, CreateCourseMapping(course)));
    }

    async deleteCourse(id) {
        return CourseMapping(await this.delete(`/cursos/${id}`));
    }



    async getStudentById(id) {
        return StudentMapping(await this.get(`/estudiantes/${id}`));
    }

    async getAllStudents() {
        return StudentsMapping(await this.get(`/estudiantes`));
    }

    async createStudent(student) {
        return StudentMapping(await this.post(`/estudiantes`, CreateStudentMapping(student)));
    }

    async updateStudent(student) {
        return StudentMapping(await this.put(`/estudiantes/${student.id}`, { id_curso: student.id_course }));
    }

    async deleteStudent(id) {
        return StudentMapping(await this.delete(`/estudiantes/${id}`));
    }

    getStudents() {
        return [{ id: "1" }, { id: "2" }, { id: "3" }];
    }
}

module.exports = CoursesAPI;