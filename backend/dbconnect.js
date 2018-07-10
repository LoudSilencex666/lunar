if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : '83.15.215.203',
    port     : '3306',
    user     : 'root',
    password : 'pHT2yU6B_-NB', // process.env.PASSWORD_FOR_DB
    database : 'test'
});

console.log(process.env.PASSWORD_FOR_DB)
module.exports = connection;
