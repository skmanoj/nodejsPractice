var startHttp=require('./startHttp');
var router=require('./router');
startHttp.start(router.route);//passing function to start so that inside start we can use this method
