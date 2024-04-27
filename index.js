const express = require('express');
const app = express();
const port = 7777;
  
app.get('/',function(req,res){
    res.send('i love only her')
})
app.get('/love',function(req,res){
    res.send('only arna')
})
app.listen(port,function(){
    console.log(`this is ${port} is very unik`)
})