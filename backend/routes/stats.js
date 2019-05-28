const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');

let id;

router.post('/', function(req, res) {
    id = req.body.id;
    console.log(id);
    res.status(201).json({
        message: 'The id is '+ id
    })
});


router.get('/', function(req, res) {
    dbPool.query('SELECT * FROM marks WHERE user_id = "'+ id +'";').then( (marks) => {
        console.log(marks);
        if (marks.length > 0) {
            res.status(200).json(marks);
        }
        else res.status(500).send('No content available for selected user.')
    }).catch( function(err) {
        console.log(err);
    })
});

module.exports = router;
