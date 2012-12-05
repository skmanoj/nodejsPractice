module.exports=function(app)
{

	app.get('/',function(req,res)
	{	
		res.send('Hello World');
	})

	app.get('/ContactUs',function(req,res)
	{
		res.render('ContactUs');
	})

	var SendMail=require('./js/SendMail');
	app.post('/SendMsg',function(req,res)
	{
		SendMail.send(req.body.email, req.body.subject, req.body.msg);
		res.redirect('/');
	})

	app.get('/help',function(req,res)
	{
		res.send('Help');
	})

	app.get('/*',function(req,res)
	{	
		res.render('404');
	})

}
	
