const jwt = require('jsonwebtoken');
const config = require('../config');

function authTokenVerify(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' }); // tu też jakieś ładnie 403 czy coś się zrobi tak by angular wyświetlał że nie masz dostępu

    jwt.verify(token, config.secret, function(err, decoded) {
        if (err)
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        // if everything good, save to request for use in other routes
        req.userId = decoded.id;
        next();
    });
}

module.exports = authTokenVerify;
