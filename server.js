var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// set up the routes
require("./apiRoutes")(app);
require("./htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});