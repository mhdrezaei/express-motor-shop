const express = require('express');

const app = express();


app.get('/' ,(req,res)=>{
   return res.send("<h1>wellcome to express motor shop</h1>");
})

app.listen(3000 , () => console.log('server is running at 3000 port'));
