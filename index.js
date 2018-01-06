let express = require('express');
let app = express();

let PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});