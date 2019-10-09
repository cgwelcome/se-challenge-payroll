const sqlite3 = require('sqlite3');
const config = require('./config');

var db = new sqlite3.Database(config.connection.database,(err) => {
  if (err) return console.log(err);
  console.log('Connected to ' + config.connection.database); 
});

module.exports = db;
