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

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});



//GET TABLE

var reservations = [{
    routeName: "yoda",
    name: "Yoda",
    phone: "Jedi Master",
    email: 900,
    unique: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    phone: "Sith Lord",
    email: 200,
    unique: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    phone: "Jedi Master",
    email: 55,
    unique: 1350
  }
];

app.get("/reserve", function (req, res) {
  res.json(reservations);
});