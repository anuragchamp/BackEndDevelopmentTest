const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const loginController = require('./controller/controller')



require('./database_connection/databaseconnection');
require('dotenv').config();


app.use(bodyParser.json());
//server.use('/api/v1/', loginController);
require('./router')(app)



app.listen(process.env.PORT, () => {
    console.log('connected');
});