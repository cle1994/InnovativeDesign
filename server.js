// server.js

// modules ------------
var express         = require('express');
// var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

var app = express();

// config ------------
// var db = require('./config/db');

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

// routes ------------
require('./app/routes')(app);

// start app ---------
app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;