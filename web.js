var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var Buffer = fs.readFileSync ('index.html');

console.log('before calling send buffer');

app.get('/', function(request, response) {
   response.send(Buffer.toString("utf-8"));
   
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
