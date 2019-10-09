const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const entries = require('./controllers/entries');
const payrolls = require('./controllers/payrolls');

const API_PORT = 3000
app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/entries', entries);
app.use('/payrolls', payrolls);

app.listen(API_PORT, () => (
  console.log(`App listening on port ${API_PORT}`)));
