module.exports = {
    authUrl:      process.env.AUTH_URL          || 'ec2-3-237-0-162.compute-1.amazonaws.com',
    authPort:     process.env.AUTH_PORT         || '8000',
    coursesUrl:   process.env.COURSES_URL       || 'ec2-3-229-142-134.compute-1.amazonaws.com',
    coursesPort:  process.env.COURSES_PORT      || '80',
    classroomUrl: process.env.CLASSROOM_URL     || 'ec2-18-207-254-125.compute-1.amazonaws.com',
    classromPort: process.env.CLASSROOM_PORT    || '8080',
    notasUrl:     process.env.NOTAS_URL         || 'ec2-34-239-166-87.compute-1.amazonaws.com',
    notasPort:    process.env.NOTAS_PORT        || '3000',
    subjectUrl:   process.env.SUBJECT_URL       || 'localhost',
    subjectPort:  process.env.SUBJECT_PORT      || '4000',
    //AGREGAR AQUI NOTAS_NOTAS_URL Y PUERTO
}
