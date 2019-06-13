const express = require('express');
const router = express.Router();

const dbPool = require('../dbconnect');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../config');

const findUserByLogin = require('../helpers/findUserByLogin');

/* Login */

router.post('/', function(req, res) {
    const login = req.body.login;
    const password = req.body.password;

    async function loggingUserIn() {
        const user = await findUserByLogin(login);

        if (typeof user !== 'undefined' && password === user.password) {
            const userId = user.id + '';
            console.log(user.id);

            const accessToken = jwt.sign({}, config.secret, {
                algorithm: 'HS256',
                expiresIn: 24 * 60 * 60,
                subject: userId
            });

            const cookieExpDate = 24 * 60 * 60 * 100;
            res.status(200).cookie(config.cookieSessionId, accessToken, {expires: new Date(Date.now() + cookieExpDate)}).end();
        } else {
            res.sendStatus(401);
        }
    }

    loggingUserIn().then( () => {

    }).catch( (err) => {
        console.log('coś się zjebało', err);
    });
});

router.get('/', function(req, res) {

});

module.exports = router;
