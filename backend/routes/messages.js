const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');

const authTokenVerify = require('../middlewares/authTokenVerify');

let id;

let message = {};

router.post('/', authTokenVerify, function(req, res) {
    id = req.body.id;
    res.status(201).json({
        info: 'Id recieved'
    })
});

router.get('/', authTokenVerify, function(req, res) {
    dbPool.query('SELECT * FROM `messages` WHERE user_id = "'+ id +'";').then( (messages) => {
        console.log(messages);
        res.status(200).json(messages);
    }).catch( function(err) {
        console.log(err);
    })
});

router.post('/send', authTokenVerify, function(req, res) {
    message = req.body;
    console.log(message);
    res.status(200).json({
        info: 'Message recieved'
    }).then(dbPool.query('INSERT INTO `messages` (`title`, `content`, `author`, `user_id`) VALUES (`'+ message.title +'`, `'+ message.content +'`, `'+ message.author +'`, `'+ message.user_id +'`)'))
    .then( (message) =>{
        console.log(message);
    }).catch( function(err){
        console.log(err);
    })
});

module.exports = router;
