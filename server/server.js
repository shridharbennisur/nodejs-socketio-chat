const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const express = require('express');

var port = process.env.PORT || 3000;
var publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log('new User connected');

    socket.on('disconnect', ()=> {
        console.log('user was disconnected');
    });
});

server.listen(port, ()=> {
    console.log(`server runing on ${port}`);
}); 