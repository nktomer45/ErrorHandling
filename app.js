var express = require('express');
var Routes = require('./routes');
const routehandler = require('./lib/routerError')
const errorHandler =require('./lib/ErrorHandler')
class Server{
  constructor(){
    this.app = express();
  }

  boostrap(){
    this.setupRoutes()
    return this.app
  }

  setupRoutes(){
    this.app.use("/api",Routes);
    this.app.use(routehandler);
    this.app.use(errorHandler)
    return this.app
  }


  run(){
    this.app.listen(3000,()=>{
      this.setupRoutes()
      console.log(`app run on port 3000`)
    })
  }
}


module.exports = Server;
