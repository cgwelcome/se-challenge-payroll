
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const employeesRouter = require('./routers');

const API_PORT = 3000
app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

