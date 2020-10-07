const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class SubjectAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `http://${serverConfig.subjectUrl}:${serverConfig.subjectPort}`;
    }
    // Queries
    async getSubjects() {
        return await this.get('/subject');
    }
    async getSubject(id) {
        return await this.get(`/subject/${id}`);
    }
    async getContent(id) {
        return await this.get(`/subject/${id}/content`);
    }
    async getSubjectTeachers(id) {
        return await this.get(`/subject/${id}/teacher`);
    }
    async getTeacherSubjects(id) {
        return await this.get(`/teacher/${id}`);
    }
    // Mutations
    async postSubject(data) {
        return await this.post('/subject', data);
    }
    async putSubject(id, data) {
        return await this.put(`/subject/${id}`, data);
    }
    async deleteSubject(data) {
        return await this.delete(`/subject/${id}`, data);
    }
    async putContent(id, content) {
        return await this.put(`/subject/${id}/content`, content);
    }
    async postTeacher(data) {
        return await this.post('/teacher', data);
    }
    async deleteTeacher(data) {
        return await this.delete('/teacher', data);
    }
}
module.exports = SubjectAPI;
