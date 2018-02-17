//Setting up Server Connection for Burger App


var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var express = require('express');


var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// app.use(express.static(path.join(__dirname, 'app/public')));

// require('./app/routing/apiRoutes.js')(app);
// require('./app/routing/htmlRoutes.js')(app);


// app.listen(PORT, function () {
//     console.log("App listening on PORT: " + PORT);
// })