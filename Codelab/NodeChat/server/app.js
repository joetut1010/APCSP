// npm 
var express = require('express');
var http = require('http');
var socketio = require('socket.io');

//app
var app = express();
var server = http.createServer(app);
var io = socketio(server);

//web server meta - path from server to client
var webroot = __dirname + '/../client/';
var port = 3000;

//hosting
app.use('/', express.static(webroot));

//run server
server.listen(port, function () {
    console.log('hosting from ' + webroot);
    console.log('ready to serve http://localhost:' + port + '/');

});

//user array
var users = [];

//web sockets
io.sockets.on('connection', function (socket) {
    var message = {
        text: 'Hello!'
    };
    socket.emit('welcome', message);

    socket.on('user', function (name) {
        users.push(name);
        console.log(name + ' connected\nusers: ' + users.length);
        socket.user = name;
        socket.broadcast.emit('otherUserConnect', name);
    });

    // user updating
    socket.on('disconnect', function () {
        if (!socket.user)
            return;
        if (users.indexOf(socket.user) > -1) {
            users.splice(users.indexOf(socket.user), 1);
            socket.broadcast.emit('otherUserDisconnect', socket.user);
            console.log(socket.user + ' disconnect\nusers: ' + users.length);
        }
    });


    // messaging
    socket.on('message', function (data) {
        var message = {
            user: socket.user,
            message: data
        };
        io.sockets.emit('message', message);
        console.log(socket.user + ': ' + data);
    });

});
