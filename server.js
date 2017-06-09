var express = require('express'),
request = require('request');

var app = express();

var baseUrl = 'http://api.amp.active.com';

app.get('/', function(req, res) {
  res.send(200, '<h1>See documentation for API usage.<h1>');// +
                '<p><a href="https://github.com/FDAWES/active-access-app">Documentation for this project</a></p>' +
                '<p><a href="http://developer.active.com/docs/read/v2_Activity_API_Search">Active Access Documentation</a></p>')
});

app.get('*', function(req, res) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  console.log("Original URL: " + req.originalUrl);

  request.get(baseUrl + req.originalUrl, function(err, r_res, body) {
    if (err) res.send(500);
    else res.send(body);
  });

}); 

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on ' + port + '.');
});