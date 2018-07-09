const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : '83.15.215.203',
    port     : '3306',
    user     : 'root',
    password : 'pHT2yU6B_-NB',
    database : 'test'
  });

module.exports = connection;
