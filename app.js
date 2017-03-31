var express = require('express');
var app = express();
app.use(express.static(__dirname + '/')); //__dir and not _dir
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
var port = 8080; // you can use any port
app.listen(port);
console.log('server on ' + port);