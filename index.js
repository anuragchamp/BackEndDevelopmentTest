const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const loginController = require('./controller/login_controller')


require('./database_connection/DatabaseConnection');
require('dotenv').config();


server.use(bodyParser.json());
server.use('/api/v1/', loginController);




server.listen(process.env.PORT, () => {
    console.log('connected');
});