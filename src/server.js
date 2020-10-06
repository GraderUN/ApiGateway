module.exports = {
    coursesUrl: process.env.COURSES_URL || 'ec2-3-229-142-134.compute-1.amazonaws.com',
    coursesPort: process.env.AUTH_PORT || '80',
    notasUrl: process.env.NOTAS_URL || 'ec2-34-239-166-87.compute-1.amazonaws.com',
    notasPort: process.env.NOTAS_PORT || '3000'
}