var http = require("http");
var url = require("url");
var fs = require("fs");


http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err,data){
        if (err){
            res.writeHead(404, {"content-type": "text/html"});
            return res.end("404 NO ENCONTRADO");
        }

        res.writeHead(200, {"content-type": "text/html"});
        return res.end("200 ENCONTRADO");


    })
}).listen(8080);