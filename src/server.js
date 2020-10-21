module.exports = {
    gestionNotasUrl: process.env.NOTAS_API_URL || "ec2-100-26-180-84.compute-1.amazonaws.com",
    gestionNotasPort: process.env.NOTAS_API_PORT || "4000",
    authUrl: process.env.AUTH_URL,
    authPort: process.env.AUTH_PORT,
    coursesUrl: process.env.COURSES_URL || "ec2-3-236-208-131.compute-1.amazonaws.com",
    coursesPort: process.env.COURSES_PORT || "80",
    classroomUrl: process.env.CLASSROOM_URL || "ec2-3-238-118-201.compute-1.amazonaws.com",
    classromPort: process.env.CLASSROOM_PORT || "8080",
    notasUrl: process.env.NOTAS_URL || "ec2-34-239-178-179.compute-1.amazonaws.com",
    notasPort: process.env.NOTAS_PORT || "3000",
    subjectUrl: process.env.SUBJECT_URL || "ec2-3-85-218-20.compute-1.amazonaws.com",
    subjectPort: process.env.SUBJECT_PORT || "4000",
    administrativoUrl: process.env.ADMINISTRATIVO_URL || "ec2-100-26-180-84.compute-1.amazonaws.com",
    administrativoPort: process.env.ADMINISTRATIVO_PORT || "8080"
}
