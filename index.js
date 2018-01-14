let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let PORT = 3000;

app.get('/hello', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
