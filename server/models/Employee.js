const db = require('../db');

migrate() {
  db.run('
    CREATE TABLE IF NOT EXISTS
  ');
}

drop() {
  db.drop('
    CREATE TABLE 
  );
}


all(callback) {
  this.db.all(`
    SELECT * FROM Entries
  `);
}

create(callback) {
  this.db.run(`
    INSERT INTO (date, hours_worked, employee_id, job_group)
    FROM
  `);
}

bulk(callback) {
  this.db.
}

export default Employee;
