



var express = require("express");
var router = express.Router();

//Import the js file from model to use it's database functions//
var burger = require("../models/burger.js");

//Create all routes and set up logic within those routes where required

router.get("/", function(req, res)  {
    burger.selectAll(function(data)  {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.delete("/api/burgers/:id", function(req, res)    {
    let condition = "id="+req.params.id;
    burger.delete(condition, function(result)   {
        if(result.affectedRows ===0)    {
            //if no rows effected, ufo (id) didn't exist. send 404
        return res.status(404).end();
        }
    });
});

router.post("/api/burgers", function(req, res)  {
    burger.create([
        "burger_name", "devoured"
    ],[
        req.body.name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});


// Export routes for server.js to use.
module.exports = router;
