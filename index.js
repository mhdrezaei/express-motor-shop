const express = require('express');
const app = express();
const motors = require('./data/data.json');

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/' ,(req,res)=>{
    res.render('shop',{
        motors
    })
});

app.get('/product' ,(req,res)=>{

    const motor = motors.find((mtr) => mtr.id === req.query.id);
    res.render('product',{
        motor
    });
});

app.listen(3000 , () => console.log('server is running at 3000 port'));
