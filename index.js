const express = require('express');
const app = express();
const motors = require('./data/data.json');

app.get('/' ,(req,res)=>{
    res.send(motors);
});

app.get('/product' ,(req,res)=>{

    const motor = motors.find((mtr) => mtr.id === req.query.id);
    res.send(motor);
});

app.listen(3000 , () => console.log('server is running at 3000 port'));
