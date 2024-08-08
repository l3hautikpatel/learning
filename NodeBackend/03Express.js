var express = require("express")
var app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((req, res ,next)=>{
    console.log("we are passed form the frist middelware");
    next();
})

app.get('/',(req, res)=>{
    res.send("hello bhautik this is defult")
})
app.get('/profile',(req, res)=>{
    res.send("hello bhautik this is in profile")
    
})
app.get('/port',(req, res)=>{
    res.send("hello bhautik this is in port")
    
})
app.get('/error',(req, res,next)=>{
    return next(new Error("some thing went worng and now i want to show that in the console that i can do in this "))
})

app.use((err ,req ,res ,next)=>{
    console.error(err.stack);
    res.status(500).send('something went wrong this is show in the responce part of the url')
})
app.listen(3000);