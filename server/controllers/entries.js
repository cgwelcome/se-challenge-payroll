const express = require('express');
const router = express.Router();
const multer = require('multer');
const Entry = require('../models/Entry');
const upload = multer({ dest: 'uploads/' })
const entryParser = require('../storage/entryParser');

router.get('/', (req, res) => {
  Entry.all((err, data) => {
    if (err) res.status(400).json({'error': err});
    res.json(data);
  });
});

router.post('/uploadFile', upload.single('EntryFile'), (req, res) => {
  entryParser.parse(req.file, err => {
    console.log(err);
    res.status(400).send();
  });
  res.json({'status': 'Sucessfully uploaded'});
});

module.exports = router;
