const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Connection = require('./database/db.js');

const Routes = require('./routes/route.js');
const app = express();




app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
//يعني وين راح يروح
app.use('/', Routes);

const Port = 8000;


Connection();

app.listen(Port, () => console.log(`your server is running successfully on port ${Port}`));