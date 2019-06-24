const express = require('express');
const router = express.Router();
const dbPool = require('../dbconnect');

const authTokenVerify = require('../middlewares/authTokenVerify');

router.post('/', authTokenVerify, function(req, res) {
    const news = req.body.news;
    let groups = news.groups_id;
    dbPool.query(`INSERT INTO news(title, content, author) VALUES ("${news.title}","${news.content}","${req.userId}")`)
    .then((result) => {
        const id = result.insertId;
        for(let i=0; i < groups.length; i++) {
            groups[i].push(id);
        }
        return groups; 
    }).then((groups)=> {
        dbPool.query(`INSERT INTO group_news(group_id, news_id) VALUES ?`, [groups])
        .then((response) => {
            res.status(200).json({
                info: 'News recieved'
            });
            console.log(response);
        }).catch( function(err) {
            console.log(err);
        })
    })
        .catch( function(err) {
        console.log(err);
    })
})

router.get('/getAll', authTokenVerify, function(req, res) {
    dbPool.query('SELECT * FROM news')
    .then( (news) => {
        res.status(200).json(news);
    }).catch( function(err) {
        console.log(err);
    })
});

router.get('/getNews', authTokenVerify, function(req, res) {
    dbPool.query('SELECT `news`.`id`, `news`.`title`, `news`.`content`, `news`.`creation_date` , `users`.`name`, `users`.`lastname` \
    FROM `group_news` \
    INNER JOIN `news` ON `group_news`.`news_id` = `news`.id \
    INNER JOIN `users` ON `news`.author = `users`.`id` \
    INNER JOIN `groups` ON `group_news`.`group_id` = `groups`.id \
    WHERE `group_news`.`group_id` IN (SELECT `groups`.`id` FROM `groups` INNER JOIN `users` ON `users`.`group_id` = `groups`.`id` WHERE `users`.`id` = ?', [req.userId])
    .then( (news) => {
        res.status(200).json(news);
    }).catch( function(err) {
        console.log(err);
    })
});

module.exports = router;
