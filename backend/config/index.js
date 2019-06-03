module.exports = {
    secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'ZipusGolem',
    cookieSessionId: 'SESSIONID'
};
