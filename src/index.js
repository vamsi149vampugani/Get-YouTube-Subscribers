// Importing required modules
const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
const port = process.env.port || 3000;


// Parse JSON bodies
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


const DATABASE_URL = "mongodb://127.0.0.1:27017/subscribers";

// Connect to MongoDB using Mongoose
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// If an error occurs during connection, handle and log the error
db.on("error", (err) => console.log(err));

// If the connection is successful, log a success message
db.once("open", () => console.log("connected to database"));

// Start Server and make it listen on the specified port
module.exports= app.listen(port, () =>
    console.log(`Server is working, App listening on port ${port}!`)
    
);
