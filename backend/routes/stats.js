const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect')

let id = '75';

// router.post('/', function(req, res) {
// });

router.get('/', function(req, res) {
    dbPool.query('SELECT * FROM oceny WHERE id_uczen = "'+ id +'";').then( (marks) => {
        console.log(marks);
        if (marks.length > 0){
        res.status(200).json(marks);
        }
        else res.status(500).send('No content available for selected user.')
    }).catch( function(err) {
        console.log(err);
    })
});

module.exports = router;
