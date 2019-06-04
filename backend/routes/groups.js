const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');

const authTokenVerify = require('../middlewares/authTokenVerify');


router.get('/', authTokenVerify, function(req, res) {
    dbPool.query('SELECT * FROM `groups`').then((groups) => {
        console.log(groups);
        res.status(200).json(groups);
    }).catch( function(err) {
        console.log(err);
    })
})

module.exports = router;
