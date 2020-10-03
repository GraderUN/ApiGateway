module.exports = {
    url:process.env.AUTH_URL || 'http://ec2-54-158-114-74.compute-1.amazonaws.com/',
    port:process.env.AUTH_PORT || '4000',
    entryPoint:process.env.AUTH_USERS_ENTRY || 'sa-auth-ms/resources/',
    port: process.env.PORT || 5001,
}