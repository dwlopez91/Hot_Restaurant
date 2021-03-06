var path = require("path");

module.exports = function(app) {
  // display the home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./home.html"));
  });
  // display the tables page
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "./tables.html"));
  });
  // display the waiting page
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "./reserve.html"));
  });
}
