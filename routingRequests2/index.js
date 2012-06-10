var startHttp=require('./startHttp');
var router=require('./router');
var requestHandlers=require('./requestHandlers');

var handle={}//this acts like map which maps string i.e pathname to functions to be called
handle['/']=requestHandlers.start  //start acts as default function
handle['/start']=requestHandlers.start
handle['/upload']=requestHandlers.upload


startHttp.start(router.route,handle);//passing map and function to start so that inside start we can use this method
