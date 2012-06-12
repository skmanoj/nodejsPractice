var mysql      = require('mysql');
var dbname='bookmarkAppTest';
var table1='t1';//has name url
var table2='t2';//has name tag


var client = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
});

client.connect();
console.log('connected');

client.query('CREATE DATABASE '+dbname, function(err) {
  if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {
    throw err;
  }
  else
    console.log('db created');
});

client.query('USE '+dbname);

client.query(
  'CREATE TEMPORARY TABLE '+table1+
  '(name VARCHAR(255), '+
  'url varchar(255), '+
  'PRIMARY KEY (name))',
  function selectCb(err, results, fields) {
    if (err) {
      throw err;
    } 
    console.log('success creating t1');
  }  
);

client.query(
  'CREATE TEMPORARY TABLE '+table2+
  '(name VARCHAR(255), '+
  'tag varchar(255), '+
  'FOREIGN KEY (name)' +
  'REFERENCES '+table1+'(name)' +
  'ON DELETE CASCADE)', 
  function selectCb(err, results, fields) {
    if (err) {
      throw err;
    } 
    console.log('success creating t2');
  }  
  
);

client.query(
   'INSERT INTO '+table1+' (name,url) values ("fb","http://www.fb.com")',
  function selectCb(err, result) {
  if(err)
    throw err;
  console.log(result.insertId);
  });

client.query(
   'INSERT INTO '+table2+' (name,tag) values ("fb","social networking")',
  function selectCb(err,result) {
  if(err)
    throw err;
 
    console.log(result.insertId);
  });


console.log('querying');
client.query(
 'SELECT * FROM '+table1,
  function selectCb(err, results, fields) {
  if(err){
  throw err;
  }
    console.log(results,fields);
  }
);

client.end();

















