var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  // Read an existing file content
    fs.readFile('Person.json', 'utf-8',function(err, data) {
    if(err) {
        console.error("Error reading file:", err);
        return;
    }
    const jsonData = JSON.parse(data);
    console.log(jsonData);

    res.writeHead(200, {'Content-Type': 'text/json'});
    console.log("File Data : ", data);
    res.write(data);
    res.end();
  });
}).listen(8080);