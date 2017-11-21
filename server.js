var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Organization = require('./api/models/OrgniazationModel'),
    bodyParser = require('body-parser');


var mongoUrl = "localhost:27017/intercept";
mongoose.Promise = global.Promise;
mongoose.connect('mongodb:' + mongoUrl);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes.routes.js');
routes(app);

app.listen(port);
console.log('Intercept API server started on ' + port);
