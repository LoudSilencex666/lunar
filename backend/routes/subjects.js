const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');

router.get('/', function(req, res) {
    dbPool.query('SELECT * FROM subjects').then( (subjects) => {
        console.log(subjects);
        if (subjects.length > 0) {
            res.status(200).json(subjects);
        }
        else res.status(500).send('No subjects added yet!')
    }).catch( function(err) {
        console.log(err);
    })
})

module.exports = router;
