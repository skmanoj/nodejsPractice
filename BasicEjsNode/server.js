var express = require('express');

var app=express();



app.configure(function(){
  app.use(express.bodyParser());
  app.set('views',__dirname + '/views');//created for contactUs
  app.set('view engine','ejs');//created for contactUs
  app.use(express.logger());
}
)

app.configure('development',function(){ //NODE_ENV=development node app1.js
  app.use(express.logger());
}
)

app.configure('production',function(){
  app.use(express.logger());
}
)

require('./routes')(app);

app.listen(8080);
