var http = require("http")
var fs = require("fs")
http.createServer(function (req, res) {
    console.log("req ==> ", req.url);
    if (req.url == "/") {
        res.write("welcome")
        res.end()
    } else if (req.url == "/signup") {
        fs.readFile("signup.html", function (err, data) {
            if (err) {
                res.write(err);
                res.end();
            } else {
                res.writeHead(200, { "Content-Type": "text/html" })
                res.write(data)
                res.end()
            }
        })
    } else if (req.url == "/login") {
        fs.readFile("login.html", function (err, data) {
            if (err) {
                res.write(err);
                res.end();
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        })
    } //else if (req.url == "/saveuser") {  //req.url.indexOf("/saveuser") != -1   
        else if(req.url.indexOf("/saveuser") != -1){ 
        //sdjfglksdfjlfdgjlfdsaveusersdlfjsdfdlkg
       
        
        res.write("data save");
        res.end();
    }
}).listen(3000)
//express
