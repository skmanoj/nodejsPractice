var http = require('http')
  , mysql = require('mysql');

var client = mysql.createClient({
user: 'root',
password: ''
});
console.log("connected")
