const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');

const authTokenVerify = require('../middlewares/authTokenVerify');
const objectToMysqlSet = require('../helpers/objectToMysqlSet');

router.get('/getuser', authTokenVerify, function(req, res) {
    dbPool.query(`SELECT * FROM users WHERE id = "${req.userId}"`).then( (user) => {
        res.status(200).json(user[0]);
    }).catch( function(err) {
        console.log(err);
    })
});

router.get('/getusers', authTokenVerify, function(req, res) {
    dbPool.query(`SELECT * FROM users`).then( (users) => {
        res.status(200).json(users);
    }).catch( function(err) {
        console.log(err);
    })
});

router.post('/adduser', authTokenVerify, function(req, res) {
    console.log(`INSERT INTO users SET ${objectToMysqlSet(req.body)}`);
    dbPool.query(`INSERT INTO users SET ${objectToMysqlSet(req.body)};`).then( () => {
        res.status(200).json({message: 'user added'});
    }).catch( function(err) {
        console.log(err);
    })
});

router.post('/updateuser', authTokenVerify, function(req, res) {
    dbPool.query(`UPDATE 'users' SET ${objectToMysqlSet(req.body)}; WHERE id = ${req.body.id}`).then( () => {
        res.status(200).send('user updated');
    }).catch( function(err) {
        console.log(err);
    })
});

router.post('/deleteuser', authTokenVerify, function(req, res) {
    dbPool.query(`DELETE FROM 'users' WHERE id = ${req.body.deleteUserId}`).then( () => {
        res.status(200).send('user deleted');
    }).catch( function(err) {
        console.log(err);
    })
});

module.exports = router;
