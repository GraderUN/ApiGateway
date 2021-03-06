const classroomResolver = {
    Query: {
        allClassrooms: function(_, __, { dataSources }) {
            return dataSources.classroomAPI.getallClassrooms();
        },

        allAssignements: function(_, __, { dataSources }) {
            return dataSources.classroomAPI.getallAssignemets();
        },

        AssignementsByProfessor: function(_, { professor }, { dataSources }) {
            return dataSources.classroomAPI.getallAssignemetsByProfessor(professor);
        },

        AssignementsByCourse: function(_, { courseID }, { dataSources }) {
            return dataSources.classroomAPI.getallAssignemetsByCourse(courseID);
        },
        AssignementsByClassroom: function(_, { classroomID }, { dataSources }) {
            return dataSources.classroomAPI.getallAssignemetsByClassroom(classroomID);
        },
        //----------------------------------------COMPLEX QUERY--------------------------------------------------------
        assignementsbyStudent: async function(_, { id }, { dataSources }) {
            //permisos cualquiera (TAL VEZ etudiante no)
            let curso = (await dataSources.coursesAPI.getStudentById(id)).id_course;
            let clase = await dataSources.classroomAPI.getallAssignemetsByCourse(curso);
            for (let i = 0; i < clase.length; i++) {

                let materia = await dataSources.subjectAPI.getSubject(parseInt(clase[i].materia));
                clase[i].materia = materia.name;
                let profesor = await dataSources.profesorAPI.getProfesorById(parseInt(clase[i].profesor));
                clase[i].profesor = profesor.nombre;

            }

            return clase;

        },

        allAssignementsInfo: async function(_, __, { dataSources }) {
            var res = await dataSources.classroomAPI.getallAssignemets();
            for (var i = 0; i < res.length; i++) {
                var curso = await dataSources.coursesAPI.getCourseById(res[i].curso);
                var profesor = await dataSources.profesorAPI.getProfesorById(res[i].profesor);

                res[i].curso = curso.grade + curso.letter;
                res[i].profesor = profesor.nombre + " " + profesor.apellido;
                res[i].materia = (await dataSources.subjectAPI.getSubject(parseInt(res[i].materia))).name;
            }
            return res;
        }
    },

    Mutation: {
        createClassroom: function(_, { classroom }, { dataSources }) {
            return dataSources.classroomAPI.createClassroom(classroom);
        },
        createAssignement: function(_, { assignement }, { dataSources }) {
            return dataSources.classroomAPI.createAssignement(assignement);
        },
        deleteAssignement: function(_, { id }, { dataSources }) {
            return dataSources.classroomAPI.deleteAssignement(id);
        },
        deleteClassroom: function(_, { id }, { dataSources }) {
            return dataSources.classroomAPI.deleteClassroom(id);
        },
    }
};

module.exports = classroomResolver;