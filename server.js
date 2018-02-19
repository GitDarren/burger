//Setting up Server Connection for Burger App


var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var express = require('express');

var PORT = process.env.PORT || 8080;
var app = express();



app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

//Overrides the method of a request based on the X-HTTP-Method-Override header
app.use(methodOverride('X-HTTP-Method-Override'));


//in lieu of Path
app.use(express.static(__dirname + '/public'));

// Set Handlebars//
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and gives the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost: "+ PORT);
});