var express = require("express")
var app = express();

app.get('/',(req, res)=>{
    res.send("hello bhautik this is defult")
})
app.get('/profile',(req, res)=>{
    res.send("hello bhautik this is in profile")
    
})
app.get('/port',(req, res)=>{
    res.send("hello bhautik this is in port")
    
})

app.listen(3000);