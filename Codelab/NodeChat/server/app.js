var express = require('express');
var app = express();
var http = require('html').Server(app);

var webroot = __dirname + '/../client'

app.use('/', express.static(webroot));

var server = http.listen(3000, function () {
            console.log('hosting from' + webroot);
            console.log('server listening on http://localhost/')
        }
