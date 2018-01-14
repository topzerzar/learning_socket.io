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

// listening connection for event incoming socket.
io.on('connection', (socket) => {
  // receive event from front
  socket.on('chat message', (msg) => {
    console.log(`message: ${msg}`);
  });

  // default event
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});



http.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
