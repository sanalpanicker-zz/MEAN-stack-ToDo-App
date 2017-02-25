var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var port = process.env.PORT || 3000;
//pointing to the assets
app.use('/assets', express.static(__dirname + '/public/src'));
//setting the templating engine
app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
//express app - setting routes
setupController(app);
apiController(app);

app.listen(port);