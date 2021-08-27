var express = require("express")
var fs = require("fs")
var app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use("/",function(req,res){
//     console.log("/");
//     res.write("welcome");
//     res.end();
// })

app.use("/signup", function (req, res) {
    console.log("/signup");
    fs.readFile("signup.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write(data);
        res.end()
    })
})


app.use("/login", function (req, res) {
    console.log("/login");
    fs.readFile("login.html", function (err, data) {
        if (data) {
            console.log("done ");
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(data);
            res.end()
        } else {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(err);
            res.end()
        }
    })
})

app.use("/saveuser", function (req, res) {
    // console.log(req);
    console.log("GET ==> ", req.query);
    console.log("POST ==> ", req.body);
    res.writeHead(200, { "Content-Type": "text/html" })
    res.write("saveuser");
    res.end()

})

app.use("/inputnumbers", function (req, res) {
    fs.readFile("InputNumbers.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    })
})

app.use("/outputnumbers", function (req, res) {
    fs.readFile("OutputNumbers.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    })
})

app.listen(3000, function () {
    console.log("server started on 3000 ");
})

