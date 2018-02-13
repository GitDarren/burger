

//Psuedocode for main app//

//Import Orm.js//
var orm = require("./config/orm.js");

//create the code that will call the ORM functions using burger specific input for the ORM.

// Find all the burgers in the database
orm.selectAll("burger_name", "devoured");

// Insert one burger into the database
orm.insertOne("burger_name", "devoured");

// Update a burger in the database
orm.updateOne("burger_name", "devoured");

// Exports the burger.js for other files to use
module.exports = burger;