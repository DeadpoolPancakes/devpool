var express = require('express');

app = express(),
port = process.env.PORT || 3000,
model = require('./api/models/model'), //created model loading here
bodyParser = require('body-parser');

var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Inventory-api: ' + port);
