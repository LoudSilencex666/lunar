if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const mysql = require('promise-mysql');

dbPool = mysql.createPool({
    host     : process.env.HOST,
    port     : process.env.DB_PORT,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
});

module.exports = dbPool;
