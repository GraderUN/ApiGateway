//(_, __, { dataSources }) => dataSources.coursesAPI.getallCourses(),

/*allCourses: function(_, __, { dataSources }) {
    return dataSources.coursesAPI.getallCourses();*/

const coursesResolver = {
    Query: {
        allCourses: function(_, __, { dataSources }) {
            //permisos administrador
            return dataSources.coursesAPI.getallCourses();
        },

        courseById: function(_, { id }, { dataSources }) {
            //permisos cualquiera
            return dataSources.coursesAPI.getCourseById(id);
        },

        allStudents: function(_, __, { dataSources }) {
            //permisos administrador
            return dataSources.coursesAPI.getAllStudents();
        },

        studentById: function(_, { id }, { dataSources }) {
            //permisos cualquiera
            return dataSources.coursesAPI.getStudentById(id);
        },
        courseStudents: async function(_, { id }, { dataSources }) {
        	//permisos cualquiera (TAL VEZ etudiante no)
            const estudiantes = (await (dataSources.coursesAPI.getCourseById(id))).id_students;
            var res = [];
            for(var i=0; i<estudiantes.length; i++){
                const estudiante = await dataSources.estudianteAPI.getEstudianteById(estudiantes[i])
                res.push(estudiante);
            }
        	return res;
        },
        studentsWithoutCourse: async function(_, __, { dataSources }) {
        	//permisos administrador
            var estudiantes = await dataSources.estudianteAPI.getAllEstudiantes();
            var noDisp = await dataSources.coursesAPI.getAllStudents();
            var res = []
            for(var i=0; i<estudiantes.length; i++){
                var isAvailable = true
                for(var j=0; j<noDisp.length; j++){
                    if(estudiantes[i].id == noDisponible[j].id){
                        isAvailable = false
                        break;
                    }
                }
                if(isAvailable){
                    res.push(estudiantes[i])
                }			
            }
        	return res;
        }
    },
    Student: {
        //course: (student, __, { dataSources }) => dataSources.coursesAPI.getStudentCourse(student.id_course)
    },
    CourseWithStudentsInfo: {
        id_students: (course, __, { dataSources }) => dataSources.coursesAPI.getStudents()
    },
    Mutation: {
        createCourse: function(_, { course }, { dataSources }) {
            //permisos administrador
            return dataSources.coursesAPI.createCourse(course);
        },

        deleteCourse: function(_, { id }, { dataSources }) {
            //permisos administrador
            return dataSources.coursesAPI.deleteCourse(id);
        },

        createStudent: function(_, { student }, { dataSources }) {
            //permisos administrador
            return dataSources.coursesAPI.createStudent(student);
        },

        updateStudent: function(_, { student }, { dataSources }) {
            //permisos administrador
            return dataSources.coursesAPI.updateStudent(student);
        },
        deleteStudent: function(_, { id }, { dataSources }) {
            //permisos administrador
            return dataSources.coursesAPI.deleteStudent(id);
        }
    }
};

module.exports = coursesResolver;