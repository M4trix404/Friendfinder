// DEPENDENCIES
   var path = require("path");


   module.exports = function(app) {

    // HTML GET Requests

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //Default to home if no matching route is found
    app.use("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

};