



var express = require("express");
var router = express.Router();

//Import the js file from model to use it's database functions//
var burger = require("../models/burger.js");

//Create all routes and set up logic within those routes where required

router.get("/", function(req, res)  {
    burger.all(function(data)  {
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

// Export routes for server.js to use.
module.exports = router;
