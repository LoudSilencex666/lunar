const express = require('express');
const router = express.Router();

const dbPool = require('../dbconnect');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../config');

/* GET home page. */
router.post('/', function(req, res) {
    console.log('xD');
    dbPool.query('SELECT * FROM users WHERE id = 78').then( (err, user) => {
        if (err) return res.status(500).send('Error on the server.'); //będzie zwracać jsonową odpowiedź na angulara i on wyświetli błąd
        if (!user) return res.status(404).send('No user found.');

        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    })
});

router.get('/', function(req, res) {
    dbPool.query('SELECT * FROM users WHERE id = 78').then( (err, user) => {
        res.status(200).send(user);
    })
    //console.log('xD');

    //res.status(200).json(zipa, '111');

});

module.exports = router;
