'use strict';

var morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('express-method-override'),
    session        = require('express-session'),
    RedisStore     = require('connect-redis')(session),
    debug          = require('../lib/debug'),
    security       = require('../lib/security'),
    home           = require('../controllers/home'),
    users          = require('../controllers/users'),
    lifts          = require('../controllers/lifts'),
    workouts       = require('../controllers/workouts'),
    goals          = require('../controllers/goals');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../../public'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(session({store:new RedisStore(), secret:'my super secret key', resave:true, saveUninitialized:true, cookie:{maxAge:null}}));

  app.use(security.authenticate);
  app.use(debug.info);

  app.get('/home', home.index);
  app.post('/register', users.register);
  app.post('/login', users.login);

  app.use(security.bounce);
  app.delete('/logout', users.logout);
  app.post('/lifts', lifts.create);
  app.get('/lifts', lifts.index);
  app.post('/workouts', workouts.create);
  app.get('/workouts', workouts.index);
  app.get('/workouts/:date', workouts.find);
  app.post('/goals', goals.create);
  app.get('/goals', goals.index);
  app.get('/goals/:date', goals.find);

  console.log('Express: Routes Loaded');
};

