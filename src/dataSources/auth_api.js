const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');


function UserMapping(data) {
    return { email: data.email, password: data.password};
}

function updateMapping(data) {
    return { userId: data.userId, email: data.email};
}

    
function authRequestMapping(data) {
    return { authToken: data,};
}


class authAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `http://${serverConfig.authUrl}:${serverConfig.authPort}`;
    }

    async authRequest(token) {
        return await this.get(`/authRequest/`, null,
            {
                headers: { Authorization: token }
            });
    }

    async createUser(user) {
        return (await this.post(`/register/`, UserMapping(user)));
    }

    async updateEmail(updateEmail) {
        let a = (await this.patch(`/updateEmail/`, updateMapping(updateEmail)));
        return a === 'True';
    }

    async deleteUser(user) {
        return (await this.delete(`/delete/`,  null,
            {
                body: { userId: user.userId},
            }));
    }

}

module.exports = authAPI;