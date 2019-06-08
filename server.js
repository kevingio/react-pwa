const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.enable('trust proxy');
app.use(function (req, res, next) {
  res.redirect('https://' + req.headers.host + req.url);
});
app.use(express.static(__dirname + '/build/'));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(port);
