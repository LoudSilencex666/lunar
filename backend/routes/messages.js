const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');

let id;

let message = {};

router.post('/', function(req, res) {
    id = req.body.id;
    res.status(201).json({
        info: 'Id recieved'
    })
});

router.get('/', function(req, res) {
    dbPool.query('SELECT * FROM `messages` WHERE user_id = "'+ id +'";').then( (news) => {
        res.status(200).json(news);
    }).catch( function(err) {
        console.log(err);
    })
});

router.post('/send', function(req, res) {
    message = req.body;
    console.log(message);
    res.status(200).json({
        info: 'Message recieved'
    }).then(dbPool.query('INSERT INTO `messages` (`title`, `content`, `creation_date`, `author`, `user_id`) VALUES (`'+ message.title +'`, `'+ message.content +'`, `'+ message.creation_date +'`, `'+ message.author +'`, `'+ message.user_id +'`)'))
    .then( (message) =>{
        console.log(message);
    }).catch( function(err){
        console.log(err);
    })
});

module.exports = router;
