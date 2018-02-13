// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var mysql = require("mysql");

// Creates mySQL connection using Node
var connection = mysql.createConnection( {
  host: "localhost",
  dialect: "mysql",
  password: "root",
    database: "burgers_db"    
});

connection.connect(function(err)    {
    if (err) throw (err);
    console.log("Connected as id: " + conneciton.threadid);
});

// Exports the connection for other files to use
module.exports = connection;
