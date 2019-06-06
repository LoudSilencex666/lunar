const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');

const authTokenVerify = require('../middlewares/authTokenVerify');

router.get('/', authTokenVerify, function(req, res) {
    dbPool.query('SELECT * FROM users').then( (users) => {
        console.log(users);
        res.status(200).json(users);
    }).catch( function(err) {
        console.log(err);
    })
});

module.exports = router;
