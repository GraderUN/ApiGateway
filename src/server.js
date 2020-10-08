module.exports = {
    notasUrl: process.env.NOTAS_API_URL || 'ec2-3-238-86-84.compute-1.amazonaws.com',
    notasPort: process.env.NOTAS_API_PORT || '4000',
    authUrl:      process.env.AUTH_URL         ,
    authPort:     process.env.AUTH_PORT        ,
    coursesUrl:   process.env.COURSES_URL      ,
    coursesPort:  process.env.COURSES_PORT     ,
    classroomUrl: process.env.CLASSROOM_URL    ,
    classromPort: process.env.CLASSROOM_PORT   ,
    notasUrl:     process.env.NOTAS_URL        ,
    notasPort:    process.env.NOTAS_PORT       ,
    subjectUrl:   process.env.SUBJECT_URL      ,
    subjectPort:  process.env.SUBJECT_PORT     ,
    //AGREGAR AQUI NOTAS_NOTAS_URL Y PUERTO
}
