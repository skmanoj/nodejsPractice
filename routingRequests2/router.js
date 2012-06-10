function route(pathname,map)
{
   console.log('Router called'+pathname);
   if(typeof map[pathname]==='function')
   {
      map[pathname]();
   }
   else
   {
     console.log('invalid'+pathname);
   }
}
exports.route=route
