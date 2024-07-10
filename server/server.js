require("dotenv").config({ path: __dirname + "/.env" }); // import .env file
const app = require('./app.js')
const http = require("http"); // import web client-server communication protocol
const asyncHandler = require("express-async-handler"); // middleware for handling exceptions 

const portServer = process.env.PORT || 4000;  // get the number of the port frm .env file
console.log("port: ", portServer);
const server = http.createServer(app);  // create a server 
const startServer = asyncHandler(async () => {   // start the server
  server.listen(portServer, () => {
    console.log(`server start on port ${portServer}`);
  });
});

startServer();