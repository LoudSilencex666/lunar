const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect')

router.get('/', function(req, res) {
    dbPool.query('SELECT id, title FROM news').then( (news_title) => {
        res.status(200).json(news_title);
    }).catch( function(err) {
        console.log(err);
    })
});

router.post('/content', function(req, res) {
    dbPool.query('SELECT content FROM news WHERE id = 1').then((news_content) => {
        console.log(news_content);
        res.status(200).json(news_content);
    }).catch( function(err){
        console.log(err);
    })
});

module.exports = router;
