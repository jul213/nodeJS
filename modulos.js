var dt = require("./servidor")



var http = require("http");

http.createServer(function (req, res) {
  res.writeHead(200, {"content-type": "text/html"});
  
  res.end("hola mundo");
}).listen(8080)