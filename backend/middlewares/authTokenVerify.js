const jwt = require('jsonwebtoken');
const config = require('../config');

function authTokenVerify(req, res, next) {
    const cookie = config.cookieSessionId
    const token = req.cookies[cookie];

    if (!token) {
        console.log(req.headers);
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err)
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        // if everything good, save to request for use in other routes
        req.userId = decoded.sub;

        next();
    });

}

module.exports = authTokenVerify;
