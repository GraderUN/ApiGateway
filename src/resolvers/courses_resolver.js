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