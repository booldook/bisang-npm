const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
	console.log(__dirname);
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
	socket.on('chat message', msg => {
		io.emit('chat message', msg);
	});
});

http.listen(3000);
