// var http = require('http');
// var port = 1036;

// http.createServer(function (req, res) {
//   res.write("I'm alive");
//   res.end();
// }).listen(port);
const express = require('express');
const app = express();

app.all('/', (req, res) => {
  res.send('Your bot is alive!')
})

function keepAlive() {
  const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
  });
}

module.exports = keepAlive;