const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');

const authTokenVerify = require('../middlewares/authTokenVerify');

router.get('/', authTokenVerify, function(req, res) {
    dbPool.query(`SELECT * FROM users WHERE id = "${req.userId}"`).then( (user) => {
        console.log(user);
        res.status(200).json(user);
    }).catch( function(err) {
        console.log(err);
    })
});

router.post('/', authTokenVerify, function(req, res) {

});

module.exports = router;
