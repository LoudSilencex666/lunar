const express = require('express');
const router = express.Router();

const dbPool = require('../dbconnect');
const authTokenVerify = require('../middlewares/authTokenVerify');

/* GET home page. */
router.get('/', authTokenVerify, function(req, res) {
    console.log('xD');
});

module.exports = router;
