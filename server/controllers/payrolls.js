const express = require('express');
const router = express.Router();
const Payroll = require('../models/Payroll');
const date = require('date-and-time');

router.get('/', (req, res) => {
  Payroll.alllow((err, lows) => {
    if (err) return console.log(err);
    Payroll.allhigh((err, highs) => {
      if (err) return console.log(err);
      highs.forEach(report => {
        const end = report.date.slice(report.date.search('/') + 1);
        let month = end.slice(0, end.search('/'));
        switch (month) {
          case '2':
            report['end_date'] = 28 + '/' + end
            break;
          case '4':
          case '6':
          case '9':
          case '11':
            report['end_date'] = 30 + '/' + end
            break;
          case '1':
          case '3':
          case '5':
          case '7':
          case '8':
          case '10':
          case '12':
            report['end_date'] = 31 + '/' + end
            break;
          default:
            break;
        }
        report['start_date'] = 16 + '/' + end
      });
      lows.forEach(report => {
        const end = report.date.slice(report.date.search('/'));
        report['start_date'] = 1 + end;
        report['end_date'] = 15 + end;
      });
      res.json(lows.concat(highs));
})})});

module.exports = router;
