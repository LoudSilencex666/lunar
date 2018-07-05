const mysql = require('mysql');

var pool  = null;
exports.connect = function() {
  pool = mysql.createPool({
    host     : '83.15.215.203',
    port     : '3306',
    user     : 'root',
    password : 'pHT2yU6B_-NB',
    database : 'test'
  });
}
exports.get = function() {
  return pool;
}
