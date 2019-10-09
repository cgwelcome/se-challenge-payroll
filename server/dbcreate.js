const sqlite3 = require('sqlite3');
const config = require('./config');

var db = new sqlite3.Database(config.connection.database, (err) => {
  if (err) return console.log(err);
  console.log('Connected to ' + config.connection.database); 
});

db.serialize(() => {
  db.run(`
    DROP TABLE IF EXISTS Entries;
  `);

  db.run(`
    DROP TABLE IF EXISTS JobGroups;
  `);

  db.run(`
    DROP TABLE IF EXISTS Reports;
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS JobGroups (
      id CHAR PRIMARY KEY,
      rate REAL
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS Reports (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      external_id INTEGER,
      identifer_no INTEGER
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS Entries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date DATE,
      hours_worked REAL,
      employee_id INTEGER,
      job_group_id INTEGER,
      report_id INTEGER,
      FOREIGN KEY(job_group_id) REFERENCES JobGroups(id),
      FOREIGN KEY(report_id) REFERENCES Reports(id)
    );
  `);

  db.run(`
    INSERT INTO JobGroups(id, rate)
    VALUES 
    ('A', 20.00),
    ('B', 30.00);
  `, (err) => {
    if (err) return console.log(err);
    console.log('Sucessfully seeded JobGroups');
  });
});

db.close();
