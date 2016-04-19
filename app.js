// base vars

var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var app = express();
var path = require('path');

// 
app.use(sassMiddleware({
    /* Options */
    src: __dirname,
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'nested',
}));


// make views the directory for templates
app.set('views', path.join(__dirname, 'views'));
app.set('stylesheets', path.join(__dirname, 'public/stylesheets'));

app.set('view engine', 'pug');
app.use(express.static('public'));

//set routes
app.get('/', function(req, res){
	res.render('index');
});



// server start
app.listen(1337);
console.log('server up!');