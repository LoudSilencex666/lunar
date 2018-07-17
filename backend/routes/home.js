const express = require('express');
const router = express.Router();

const dbPool = require('../dbconnect');
const authTokenVerify = require('../middlewares/authTokenVerify');

/* GET home page. */
router.get('/', /*authTokenVerify, */ function(req, res) {
    console.log('xD');
    dbPool.query('SELECT * FROM users').then( result =>{
        console.log(result);
    }).then( () => {
        res.status(200).send("chuj w to");
    });
});

module.exports = router;
