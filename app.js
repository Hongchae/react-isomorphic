var express = require('express');
var path = require('path');
var debug = require('debug')('react-isomorphic');
//var favicon = require('serve-favicon');

var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'target')));

app.use('/', routes);
//app.use('/users', users);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});