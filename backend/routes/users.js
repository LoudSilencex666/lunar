const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');

const authTokenVerify = require('../middlewares/authTokenVerify');

router.get('/getuser', authTokenVerify, function(req, res) {
    dbPool.query(`SELECT * FROM users WHERE id = "${req.userId}"`).then( (user) => {
        console.log(user);
        res.status(200).json(user[0]);
    }).catch( function(err) {
        console.log(err);
    })
});

router.get('/getusers', authTokenVerify, function(req, res) {
    dbPool.query(`SELECT * FROM users`).then( (users) => {
        console.log(users);
        res.status(200).json(users);
    }).catch( function(err) {
        console.log(err);
    })
});

router.post('/adduser', authTokenVerify, function(req, res) {
    dbPool.query(`INSERT INTO 'users' SET ${req.body.addUserData}`).then( () => {
        res.status(200).send('user added');
    }).catch( function(err) {
        console.log(err);
    })
});

router.post('/updateuser', authTokenVerify, function(req, res) {
    dbPool.query(`UPDATE 'users' SET ${req.body.updateUserData} WHERE id = ${req.body.updateUserId}`).then( () => {
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
