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
        dialect: "mysql",
        user: "root",
        password: "root",
          database: "burgers_db" 
        });
};

   


connection.connect(function(err)    {
    if (err) throw (err);
    console.log("Connected as id: " + conneciton.threadid);
});

// Exports the connection for other files to use
module.exports = connection;
