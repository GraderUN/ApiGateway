module.exports = {
    gestionNotasUrl: process.env.NOTAS_API_URL,
    gestionNotasPort: process.env.NOTAS_API_PORT,
    authUrl: process.env.AUTH_URL,
    authPort: process.env.AUTH_PORT,
    coursesUrl: process.env.COURSES_URL || "ec2-3-236-208-131.compute-1.amazonaws.com",
    coursesPort: process.env.COURSES_PORT || "8000",
    classroomUrl: process.env.CLASSROOM_URL || "ec2-3-238-118-201.compute-1.amazonaws.com",
    classromPort: process.env.CLASSROOM_PORT || "8080",
    notasUrl: process.env.NOTAS_URL,
    notasPort: process.env.NOTAS_PORT,
    subjectUrl: process.env.SUBJECT_URL || "ec2-3-85-218-20.compute-1.amazonaws.com",
    subjectPort: process.env.SUBJECT_PORT || "4000",
    administrativoUrl: process.env.ADMINISTRATIVO_URL,
    administrativoPort: process.env.ADMINISTRATIVO_PORT
}
