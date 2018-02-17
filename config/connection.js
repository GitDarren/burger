// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var mysql = require("mysql");


var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else  {
    connection = mysql.createConnection( {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db" 
        });
};

   


connection.connect(function(err)    {
    if (err) throw (err);
    console.log("Connected as id: " + connection.threadid);
});

// Exports the connection for other files to use
module.exports = connection;


