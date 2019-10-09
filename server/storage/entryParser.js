const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const Entry = require('../models/Entry');
const Report = require('../models/Report');

module.exports.parse = (file) => {
  const filepath = path.join(file.destination, file.filename);

  fs.createReadStream(filepath)
    .pipe(csv.parse({ headers: true }))
    .validate(row => row.date === 'report id')
    .on('data', row => {
      row['external_id'] = row['hours worked'];
      Report.create(row, (err, report_id) => {
        if (err) return console.log(err);
        fs.createReadStream(filepath)
          .pipe(csv.parse({ headers: true }))
          .validate(row => row.date !== 'report id')
          .on('data', row => {
            row['report_id'] = report_id;
            row['hours_worked'] = row['hours worked'];
            row['employee_id'] = row['employee id'];
            row['job_group_id'] = row['job group'];
            Entry.create(row);
          });
    })});
}
