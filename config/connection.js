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
        port: 3306,
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db" 
        });
};

   


connection.connect(function(err)    {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

// Exports the connection for other files to use
module.exports = connection;


