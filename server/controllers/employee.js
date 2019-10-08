const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', (req, res) => {
  Employee.all((data, err) => {
    if (err) res.status(400).json({'error': err});
    res.json(data);
  });
});

router.post('/', (req, res) => {
  Employee.create((data, err) => {
    if (err) res.status(400).json({'error': err});
    res.json(data);
  }
});

router.delete('/', (req, res) => {
  Employee.delete((err) => {
    if (err) res.status(400).json({'error': err});
    res.status(204).send();
  }
}

export default Employee;
