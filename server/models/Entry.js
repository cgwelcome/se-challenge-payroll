const db = require('../db');

module.exports.all = cb => {
  db.all(`
    SELECT date, hours_worked, employee_id, job_group_id, report_id
    FROM Entries
    ORDER BY employee_id, date
  `, cb);
};

module.exports.create = (entry, cb) => {
  db.run(`
    INSERT INTO Entries
    (
      date,
      hours_worked,
      employee_id,
      job_group_id,
      report_id
    )
    VALUES
    (
      $date,
      $hours_worked,
      $employee_id,
      $job_group_id,
      $report_id
    )
  `, {
    $date: entry.date,
    $hours_worked: entry.hours_worked,
    $employee_id: entry.employee_id,
    $job_group_id: entry.job_group_id,
    $report_id: entry.report_id,
  });
};
