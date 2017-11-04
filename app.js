require('dotenv').config(); //To load the .env file

var express = require('express');
var path = require('path'); //Gives access to relative paths (__dirname)
var logger = require('morgan'); //Logging to the console
var cookieParser = require('cookie-parser'); 
var bodyParser = require('body-parser');
var context = require("restful-express-sequelize");
var dbContext = require("./models");

var passport = require('passport');
require('./config/passport')(passport); // pass passport for configuration

var index = require('./routes/index');
var auth = require('./routes/auth')(passport);

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/auth', auth);

//Create restful endpoints out of sequelize models
var models = [];
for (var property in dbContext) {
  // register as options you can add { model: xxx, methods: ["get", "post"] }  
  // methods are (optional) defaults all registered ["get", "post", "put", "delete"]  
  models.push({ model: dbContext[property] });
}
context.Resource.register(app, models, "/api");

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);

  // render the error page
  res.status(err.status || 500);
  res.json({error: 'Server Error'});
});

module.exports = app;
