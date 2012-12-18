var express = require('express')
  , cons = require('consolidate')
  , swig = require('swig')
  , http = require('http')
  , path = require('path');

var app = express();

require('./routes')(app);

app.configure(function(){
  // assign the swig engine to .html files
  app.engine('html', cons.swig);
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  swig.init({root: __dirname + '/views'});
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('102938#@laskAE'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
