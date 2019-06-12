const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');

const authTokenVerify = require('../middlewares/authTokenVerify');

router.post('/', authTokenVerify, function(req, res) {
    const message = req.body.message;
    dbPool.query('INSERT INTO `messages` (`title`, `content`, `user_id`, `author`) VALUES ("'+ message.title +'", "'+ message.content +'", "'+ message.user_id +'", "'+ req.userId +'");')
    .then( (message) =>{
        res.status(200).json({
            info: 'Message recieved'
        });
        console.log(message);
    }).catch( function(err){
        console.log(err);
    })
});

router.get('/sent', authTokenVerify, function(req, res) {
    dbPool.query('SELECT messages.id, `title`, `content`, `creation_date`, users.name, users.lastname FROM `messages` INNER JOIN users ON users.id = messages.user_id WHERE messages.author = ? ORDER BY `creation_date` DESC;', [req.userId])
    .then((messages) => {
        console.log(messages);
        res.status(200).json(messages);
    }).catch( function(err) {
        console.log(err);
    })
});

router.get('/recieved', authTokenVerify, function(req, res) {
    dbPool.query('SELECT messages.id, `title`, `content`, `creation_date`, `user_id`, users.name, users.lastname FROM `messages` INNER JOIN users ON users.id = messages.author WHERE user_id = ? ORDER BY `creation_date` DESC;', [req.userId])
    .then( (messages) => {
        console.log(messages);
        res.status(200).json(messages);
    }).catch( function(err) {
        console.log(err);
    })
});

router.delete('/delete/:id', authTokenVerify, function(req, res) {
    dbPool.query('DELETE FROM `messages` WHERE id = ?', [req.params.id])
    .then(res.status(200).json({
        info: 'Message deleted'
    })
    ).catch( function(err) {
        console.log(err);
    })
});


module.exports = router;
