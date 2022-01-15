const express = require('express');

const controller = express.Router();

controller.get('/home', (req, res) => {
    res.send('Home controller');
})

module.exports = controller;