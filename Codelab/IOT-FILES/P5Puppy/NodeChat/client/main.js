$(document).ready(function () {
    var socket = io.connect();
    socket.on('welcome', function (data) {
        $('<div/>').text(data.text).appendTo('#log'); // takes empty div and fills it with text from the message
    });

    // recives notification
    socket.on('otherUserConnect', function (data) {
        $('<div/>').text(data + ' connected').appendTo('#log');
    });

    socket.on('otherUserDisconnect', function (data) {
        $('<div/>').text(data + ' disconnect').appendTo('#log');
    });

    socket.on('message', function (data) {
        chat(data.user + ': ' + data.message);
    });

    function chat(msg) {
        $('<div/>').text(msg).appendTo('#log');
    }


    // sets username, chat controls, sends server info
    var name;

    $('#user-save').click(function () {
        var username = $('#user-name');
        var txt = username.val().trim();
        if (txt.length > 0) {
            name = txt;
            username.prop('disabled', true);
            $(this).hide();
            $('#controls').show();
            $('#message').prop('disabled', false);
            $('#send').prop('disabled', false);
            socket.emit('user', name);
        }
    });

    //send button
    $('#send').click(function () {
        var input = $('#message');
        var text = input.val().trim();
        if (text.length > 0) {
            socket.emit('message', text);
        }
        input.val('');
    });

    //enter button
    //tells computer what to do with the text
    $('#user-name').on('keyup', function (e) {
        var ENTER_KEY = 13;
        if (e.keyCode === ENTER_KEY) {
            $('#user-save').click();
        }
    });

    $('#message').on('keyup', function (e) {
        var ENTER_KEY = 13;
        if (e.keyCode === ENTER_KEY) {
            $('#send').click();
        }
    });

});
