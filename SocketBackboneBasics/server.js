var express= require('express'),
    fn = require('./db.js'),
    http = require('http'),
    path = require('path'),
    io = require('socket.io');


var app = express();
var server = http.createServer(app); //we want express to make use of http not just sending msg's
io = io.listen(server);

app.configure(function()
{
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'public')));//on entering localhost:8080 index.html in public wld display..
});

app.get('/',fn.getAll);//gets all records in db
app.get('/name',fn.getName);//gets all founders names

io.sockets.on('connection', function(socket)
{
    
    socket.on('hi',function(msg)
    {
        console.log('cot msg: '+msg);
        socket.emit('hello',JSON.stringify({id:'helloo'}));
    });
/*    socket.on('sendMe',function(msg)
    {
        
        console.log('results:'+JSON.stringify(fn.getAllFromConnect()));
        socket.emit('fetchRes',fn.getAllFromConnect());
    });*/
    socket.on('disconnect',function()//on closing window
    {
        console.log('disconnected');
    });
});    

console.log("connected");
server.listen(8080);
