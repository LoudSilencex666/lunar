const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');

const authTokenVerify = require('../middlewares/authTokenVerify');

router.get('/', authTokenVerify, function(req, res) {
    dbPool.query('SELECT * FROM users').then( (list) => {
        console.log(list);
        res.status(200).json(list);
    }).catch( function(err) {
        console.log(err);
    })
});

module.exports = router;
