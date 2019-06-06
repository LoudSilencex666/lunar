const dbPool = require('../dbconnect');

    function findAuthorByid(id) {
        dbPool.query('SELECT `name`, `lastname` FROM users WHERE id = "'+ id +'";').then((name) => {
            return name;
        })
    }

module.exports = findAuthorByid;
