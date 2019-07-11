const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');

const authTokenVerify = require('../middlewares/authTokenVerify');

router.get('/', authTokenVerify, function(req, res) {
    dbPool.query('SELECT * FROM marks WHERE user_id = "'+ req.userId +'";').then( (marks) => {
        res.status(200).json(marks);
    }).catch( function(err) {
        console.log(err);
    })
});

module.exports = router;
