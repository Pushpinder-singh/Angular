var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  // Read an existing file content
    fs.readFile('demoFile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log("File Data : ",data);
    res.write(data);
    res.end();
  });


// Write a new file 
fs.appendFile('demoFile2.html',"Hello Engineers", function(err, data){
    if(err) throw err
    console.log('File created .. !');
});


}).listen(8080);