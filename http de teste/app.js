var http = require('http');


http.createServer( function(req ,res){
    res.end("bacatteeee")
}

).listen(8087)


console.log("servidor inicializado")