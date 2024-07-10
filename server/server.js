require("dotenv").config({ path: __dirname + "/.env" }); // import .env file
const express = require("express");
const http = require("http"); // import web client-server communication protocol
const asyncHandler = require("express-async-handler"); // middleware for handling exceptions 
const sqlite3 = require('sqlite3').verbose();
const portServer = process.env.PORT || 4000;  // get the number of the port from .env file
const app = express();
// const appRoutes = require("./routes/index.routes.js");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Connect to  my SQLite database
const db = new sqlite3.Database(process.env.DB_URL, (err) => {
    if (err) {
      console.error('Error in connecting to the database, please try again later', err);
      return;
    }
    console.log('Connecting to my SQLite database');
  });

  // Create a test table
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL
    )`);
  });

  // Attach db to request middleware
app.use((req, res, next) => {
    req.db = db;
    next();
  });

  // Import souscription route
// app.use('/api/users', userRoutes);

const server = http.createServer(app);  // create a server 
const startServer = asyncHandler(async () => {   // start the server
  server.listen(portServer, () => {
    console.log(`server start on port ${portServer}`);
  });
});

startServer();