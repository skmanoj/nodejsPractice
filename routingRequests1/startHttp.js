var http=require('http');
var url=require('url');

  function start(router)//fn being passed i.e. router
  {
     function onRequest(request,response)
     {
         var pathname=url.parse(request.url).pathname;
         console.log('http request received');
         console.log('Request for'+pathname+'received');
         router(pathname);//router fn called
         response.writeHead(200,{"content-type" : "text/plain"});
         response.write('Hello World');
         response.end();
     }
     http.createServer(onRequest).listen(8888);
     console.log('server started');
  }	
  exports.start=start;
	
	
	


