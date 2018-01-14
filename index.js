let express = require('express');
let app = express();

let PORT = 3000;

app.get('/hello', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
