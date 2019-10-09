const db = require('../db');

module.exports.create = (entry, cb) => {
  db.serialize(() => {
    db.run(`
      INSERT INTO Reports(external_id)
      VALUES
      (
        $external_id
      );
    `, {
      $external_id: entry.external_id,
      }
    );
    db.all(`
      SELECT seq FROM sqlite_sequence WHERE name="Reports";
    `, (err, data) => {
      cb(err, data[0].seq);
    })});
};
