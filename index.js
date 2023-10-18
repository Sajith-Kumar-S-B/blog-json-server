// json-server imported

const jsonServer = require("json-server")  

// create json server

const blogAppServer = jsonServer.create()

// set up path for db.json file
const router = jsonServer.router("db.json")


// return middleware used by jsonn server

const middleware = jsonServer.defaults()


// set up port for server=app
const port = 4000 || process.env.port

// use middlware and router in the server
blogAppServer.use(middleware)
blogAppServer.use(router)


// server listen for request from backend

blogAppServer.listen(port,()=>{
    console.log(`Blog App server started at port : ${port} and waiting for request !!`);

})


