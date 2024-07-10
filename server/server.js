require("dotenv").config({ path: __dirname + "/.env" }); // import .env file
const express = require("express");
const http = require("http"); // import web client-server communication protocol
const asyncHandler = require("express-async-handler"); // middleware for handling exceptions
const sqlite3 = require("sqlite3").verbose();
const portServer = process.env.PORT || 4000; // get the number of the port from .env file
const app = express();
const inscriptionRoutes = require("./routes/inscription.route.js");
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to  my SQLite database
const db = new sqlite3.Database(process.env.DB_URL, (err) => {
  if (err) {
    console.error(
      "Error in connecting to the database, please try again later",
      err
    );
    return;
  }
  console.log("Connecting to my SQLite database");
});

// Use cors middleware to handel access to the server
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// Create a test table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS inscriptions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      birthdayDate TEXT NOT NULL,
      birthdayPlace TEXT NOT NULL,
      email TEXT NOT NULL,
      phoneNumber TEXT NOT NULL,
      postalCode TEXT NOT NULL,
      city TEXT NOT NULL,
      profession TEXT NOT NULL,
      familyStatus TEXT NOT NULL,
      circulationDate TEXT NOT NULL,
      model TEXT NOT NULL,
      marque TEXT NOT NULL,
      registration TEXT NOT NULL
      
    )`);
});

// Attach db to request middleware
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Import inscription route
app.use("/api/inscriptions", inscriptionRoutes);

const server = http.createServer(app); // create a server
const startServer = asyncHandler(async () => {
  // start the server
  server.listen(portServer, () => {
    console.log(`server start on port ${portServer}`);
  });
});

startServer();
