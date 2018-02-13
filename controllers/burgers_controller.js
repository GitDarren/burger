



var express = require("express");
var router = express.Router();

//Import the js file from model to use it's database functions//
var burgerController = require("../models/burger.js");

//Create all routes and set up logic within those routes where required

router.get("/", function(req, res)  {
    project.all(function(data)  {
        var burgerObject = {
            burgerController: data
        };
        conole.log(burgerObject);
        res.render("index", burgerObject);
    });
});

// Export routes for server.js to use.
modeule.exports = router;
