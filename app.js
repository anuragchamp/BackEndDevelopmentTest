let port = process.env.PORT || 2000;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const loginController = require('./controller/controller')



require('./database_connection/databaseconnection');
require('dotenv').config();


app.use(bodyParser.json());
//server.use('/api/v1/', loginController);
require('./router')(app)



app.listen(port, () => {
    console.log('connected');
});