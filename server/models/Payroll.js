const db = require('../db');

module.exports.alllow = cb => {
  db.all(`
    SELECT employee_id, date,
    SUM(hours_worked)*rate AS Amount_paid
    FROM Entries a
    JOIN JobGroups b
    ON a.job_group_id = b.id
    JOIN Reports c
    ON a.report_id = c.id
    WHERE
      date GLOB '[1-9][^0-9]*' OR
      date GLOB '1[0-5]*'
    GROUP BY employee_id, rate, strftime("%m-%Y", date);
  `, cb);
}

module.exports.allhigh = cb => {
  db.all(`
    SELECT
    employee_id,
    date,
    SUM(hours_worked)*rate AS amount_paid
    FROM Entries a
    JOIN JobGroups b
    ON a.job_group_id = b.id
    JOIN Reports c
    ON a.report_id = c.id
    WHERE
      date GLOB '1[6-9]*' OR
      date GLOB '2[0-9]*' OR
      date GLOB '3[0-9]*'
    GROUP BY employee_id, rate, strftime("%m-%Y", date);
  `, cb);
}
