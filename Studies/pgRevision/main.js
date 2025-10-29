const {Client}= require('pg');
const express=require('express');

const app = express()

app.use(logger)

app.get('/', (req,res) =>{
  res.send('Home page asdasd')
});

app.get('/users', auth,(req, res) =>{
  console.log(`user is admin = ${req.admin}`)
  console.log('Users Page')
  res.send('Users page')
});

function logger(req,res,next){
  console.log(req.originalUrl);
  next();
}

function auth(req,res,next){
  if (req.query.admin === 'true'){
    req.admin = true
    next()
  }else{
    res.send('No auth')
  }
  console.log('Auth');
  next();
  return
}


app.listen(3000);



