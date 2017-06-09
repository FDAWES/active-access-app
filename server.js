var express = require('express'),
request = require('request');

var app = express();

var url = 'http://api.amp.active.com';

app.get('/', function(req, res) {
  res.send(200, '<p>See documentation for API usage.<p>');// +
                //'<p><a href="https://github.com/danasilver/hotwire">Documentation for this project</a></p>' +
                //'<p><a href="http://developer.hotwire.com/docs/">Hotwire Documentation</a></p>')
});

app.get('*', function(req, res) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  console.log("Original URL: " + req.originalUrl);

  request.get(url + req.originalUrl, function(err, r_res, body) {
    if (err) res.send(500);
    else res.send(body);
  });

}); 

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on ' + port + '.');
});