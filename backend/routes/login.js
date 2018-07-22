const express = require('express');
const router = express.Router();

const dbPool = require('../dbconnect');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../config');

/* GET home page. */
router.post('/', function(req, res) {
    dbPool.query('SELECT * FROM users WHERE id = 78').then( (user) => {
        user = user[0];
        if(req.body.password !== user.password) {
            console.log('!blad');
            console.log(req.body);
            console.log(req.body.password, user.password);
        }
        //let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        //if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        console.log(user);
        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    }).catch( function(err) {
        console.log(err);
    });
});

router.get('/', function(req, res) {
    dbPool.query('SELECT * FROM users WHERE id = 78').then( (err, user) => {
        console.log(user)
        res.status(200).send(user);
    })
    //console.log('xD');

    //res.status(200).json(zipa, '111');

});

module.exports = router;
