const sqlite3 = require('sqlite3'):
var db = new sqlite3.Database(':memory');

export default db;
