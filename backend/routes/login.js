const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connection = require('../dbconnect');


/* GET home page. */
router.post('/login', function(req, res) {
    // to musi być promise, sprawdza czy wysłany username jest w bazie i sprawdza czy podane hasło jest prawidłowe jak tak to zwraca mu tokena
    // wtedy reszta stron wymaga tego tokenu jak nie ma to nie dostanie dostępu, więc token tworzy się przy logowaniu i usuwa przy lougoucie

    // select where req.body.username
    // if this user is in DB
    // var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    // if password isValid
    // var token = jwt.sign({ id: user._id }, config.secret, {
    //    expiresIn: 86400 - expires in 24 hours
    // });
    // res.status(200).send({ auth: true, token: token });
});

module.exports = router;
