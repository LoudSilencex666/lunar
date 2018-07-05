const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../dbconnect');


/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM zipa', (err, result)=>{
    if (err) throw err;
    console.log(result);
  });
  res.status(200).send("chuj w to");
  });

module.exports = router;
