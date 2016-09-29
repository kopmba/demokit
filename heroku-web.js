var express = require('express');
var app = express();
var path = require('path');
var jsonServer = require('json-server');
var bodyParser = require('body-parser');
var cors = require('cors');

var port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', jsonServer.router('db.json'));
app.use(express.static(path.join(__dirname, '')));



app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function() {
  console.log('Node app is running on port ', port);
});
