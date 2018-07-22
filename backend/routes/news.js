const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect')

router.get('/', function(req, res) {
    dbPool.query('SELECT * FROM news').then( (news_title) => {
        res.status(200).json(news_title);
    }).catch( function(err) {
        console.log(err);
    })
});

module.exports = router;
