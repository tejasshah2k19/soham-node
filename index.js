var express = require("express")
var fs = require("fs")
var app = express() 



    // app.use("/",function(req,res){
    //     console.log("/");
    //     res.write("welcome");
    //     res.end();
    // })

    app.use("/signup",function(req,res){
        console.log("/signup");
        fs.readFile("signup.html",function(err,data){
                res.writeHead(200,{"Content-Type":"text/html"})
                res.write(data);
                res.end() 
        })
    })
    
  
    app.use("/login",function(req,res){
        console.log("/login");
        fs.readFile("login.html",function(err,data){
                res.writeHead(200,{"Content-Type":"text/html"})
                res.write(data);
                res.end() 
        })
    })


 

app.listen(3000,function(){
    console.log("server started on 3000 ");
})

