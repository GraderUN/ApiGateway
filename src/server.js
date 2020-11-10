module.exports = {
    gestionNotasUrl: process.env.NOTAS_API_URL || "ec2-3-233-233-255.compute-1.amazonaws.com",
    gestionNotasPort: process.env.NOTAS_API_PORT || "4000",
    authUrl: process.env.AUTH_URL,
    authPort: process.env.AUTH_PORT,
    coursesUrl: process.env.COURSES_URL || "c2-3-238-104-144.compute-1.amazonaws.com",
    coursesPort: process.env.COURSES_PORT || "8080",
    classroomUrl: process.env.CLASSROOM_URL || "ec2-3-238-88-158.compute-1.amazonaws.com",
    classromPort: process.env.CLASSROOM_PORT || "8080",
    notasUrl: process.env.NOTAS_URL || "ec2-3-235-30-72.compute-1.amazonaws.com",
    notasPort: process.env.NOTAS_PORT || "3000",
    subjectUrl: process.env.SUBJECT_URL || "ec2-34-204-200-213.compute-1.amazonaws.com",
    subjectPort: process.env.SUBJECT_PORT || "4000",
    administrativoUrl: process.env.ADMINISTRATIVO_URL || "ec2-3-238-123-139.compute-1.amazonaws.com",
    administrativoPort: process.env.ADMINISTRATIVO_PORT || "8080"
}
