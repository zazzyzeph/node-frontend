
// base vars / requires
var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var app = express();
var path = require('path');


// make views the directory for templates
app.set('views', path.join(__dirname, 'views'));
app.set('stylesheets', path.join(__dirname, 'public/stylesheets'));
app.set('view engine', 'pug');

// node-sass-middleware compiles sass on request.
// very fast but don't use this in a production
// environment.
app.use(sassMiddleware({
    /* Options */
    src: __dirname,
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'nested',
}));


// static is the only middleware included with
// Express, for a list of others:
// https://github.com/senchalabs/connect?_ga=1.18858681.1842720703.1461078413#middleware
app.use(express.static('public'));

// set routes
app.get('/', function(req, res){
	res.render('index');
});

// app.get('/about', function(req, res){
// 	res.render('about');
// });


// server start
app.listen(1337);
console.log('server up!');