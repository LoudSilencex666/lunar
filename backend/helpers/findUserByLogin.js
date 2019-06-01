const dbPool = require('../dbconnect');

const findUserByLogin = (login) => {
    return new Promise( (resolve, reject) => {
        dbPool.query(`SELECT * FROM users WHERE login = "${login}"`).then( (user) => {
            user = user[0];
            resolve(user);
        }).catch( (err) => {
            reject();
            console.log(err);
        });
    }
)};

module.exports = findUserByLogin;
