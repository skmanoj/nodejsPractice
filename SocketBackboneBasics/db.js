var mongoose = require('mongoose');
var schema = mongoose.Schema;

var db = mongoose.createConnection("mongodb://localhost/DBFhub");

db.on('error',function()
{
    console.log("error while connecting");
});

db.on('open', function()
{
    console.log("connected");    
});

var founderCollection = new schema({ name: String,company: {type: String, index: { unique: true}}});

var founders = db.model('founders',founderCollection);

//founders.index({company: 1},{unique: true,sparse: true});

/*var f1 = new founders({name: 'skManoj123', company: 'FoundersHub2'}); //first populate db

f1.save(function(err)
{
    if(!err)
        console.log('success saving');    
    else
        console.log(err);    
});

founders.find({name:'Manoj'},function(err,data)
{
    console.log(data);
});*/ 

exports.getAll = function(req,res)
{
    founders.find({},function(err,results){
        if(!err)
            res.send(JSON.stringify(results));
    });
}

exports.getName = function(req,res)
{
    founders.find({},'name',function(err,results){
        if(!err)
            res.send(JSON.stringify(results));
    });
}

exports.getByName = function(req,res)
{
    founders.find({name: req.params.name},function(err,results){
        if(!err)
            res.send(JSON.stringify(results));
        else 
            console.log(err);    
    });
}

exports.getAllFromConnect = function()
{
    var a;
    founders.find({},function(err,results){
        if(!err)
            a= results;
            console.log(a);
    });
                console.log(a);
                return a;
}




