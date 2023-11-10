var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var horseRouter = require('./routes/horse');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');
var app = express();
var horse = require("./models/horse");

async function recreateDB(){
  // Delete everything
  await horse.deleteMany();
  let instance1 = new
  horse({horse_color:"brown",horse_breed:'Brown horse',horse_price:2000});
  let instance2 = new
  horse({horse_color:"white",horse_breed:"Angora horse",horse_price:5500});
  let instance3 = new
  horse({horse_color:"black",horse_breed:"Black horse",horse_price:4000});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
  instance2.save().then(doc=>{
    console.log("Second object saved")}
    ).catch(err=>{
    console.error(err)
    });
    instance3.save().then(doc=>{
      console.log("Third object saved")}
      ).catch(err=>{
      console.error(err)
      });
  }
  let reseed = true;
  if (reseed) {recreateDB();}
  

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/horse', horseRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);

app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(500));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app