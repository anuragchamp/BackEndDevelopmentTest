const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.DB_CONNECTION_URL);

mongoose.connect(process.env.DB_CONNECTION_URL, {})
    .then(data => {
        console.log('connected');
    })
    .catch(err => {
        console.log(err);
    })