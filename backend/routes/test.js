const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');


/* GET home page. */
router.get('/', function(req, res) {
    dbPool.query('SELECT * FROM users').then( result =>{
        console.log(result);
    }).then( () => {
        res.status(200).send("chuj w to");
    });
});

module.exports = router;
