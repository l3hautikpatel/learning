var http = require('http');
var url = require('url');


http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.monh;
  res.end(txt);
}).listen(8000)