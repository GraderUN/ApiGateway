module.exports = {
    gestionNotasUrl: process.env.NOTAS_API_URL || "ec2-18-205-60-114.compute-1.amazonaws.com",
    gestionNotasPort: process.env.NOTAS_API_PORT || "4000",
    authUrl: process.env.AUTH_URL,
    authPort: process.env.AUTH_PORT,
    coursesUrl: process.env.COURSES_URL || "ec2-3-236-5-16.compute-1.amazonaws.com",
    coursesPort: process.env.COURSES_PORT || "80",
    classroomUrl: process.env.CLASSROOM_URL || "ec2-18-207-136-147.compute-1.amazonaws.com",
    classromPort: process.env.CLASSROOM_PORT || "8080",
    notasUrl: process.env.NOTAS_URL || "ec2-3-235-30-72.compute-1.amazonaws.com",
    notasPort: process.env.NOTAS_PORT || "3000",
    subjectUrl: process.env.SUBJECT_URL || "ec2-34-204-200-213.compute-1.amazonaws.com",
    subjectPort: process.env.SUBJECT_PORT || "4000",
    administrativoUrl: process.env.ADMINISTRATIVO_URL || "ec2-3-238-123-139.compute-1.amazonaws.com",
    administrativoPort: process.env.ADMINISTRATIVO_PORT || "8080"
}
