const express = require('express');
const app = express();
const motors = require('./data/data.json');

app.set('view engine', 'ejs')

app.get('/' ,(req,res)=>{
    res.render('shop');
});

app.get('/product' ,(req,res)=>{

    const motor = motors.find((mtr) => mtr.id === req.query.id);
    res.render('product');
});

app.listen(3000 , () => console.log('server is running at 3000 port'));
