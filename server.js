var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = 3000;


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});