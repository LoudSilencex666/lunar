if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : process.env.HOST,
    port     : process.env.PORT,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
});


module.exports = connection;
