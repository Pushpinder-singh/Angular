var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hellow World ! This is my first server in Nodjs..!");
  console.log("Server is up and Running @ localhost:8080");
  res.end();
}).listen(8080);