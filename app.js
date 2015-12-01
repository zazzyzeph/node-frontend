// base vars

var express = require('express');
var app = express();
var path = require('path');


// make views the directory for templates
app.set('views', path.join(__dirname, 'views'));
app.set('stylesheets', path.join(__dirname, 'public/stylesheets'));

app.set('view engine', 'jade');
app.use(express.static('public'));

//set routes
app.get('/', function(req, res){
	res.render('index');
});



// server start
app.listen(1337);
console.log('server up!');