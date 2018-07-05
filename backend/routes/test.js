const express = require('express');
var db = require('../dbconnect');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  db.get().query('SELECT * FROM zipa', (err, result)=>{
    if (err) throw err;
    console.log(result);
  res.status(200).send(result);
  });
});

module.exports = router;
