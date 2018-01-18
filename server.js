var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// This sets up the basic properties for our express server

var app = express();
// Sets an initial port.
var PORT = process.env.PORT || 3000;

// BodyParser interprets data sent to the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Points server to CSS and JS route files

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


// LISTENER: starts the server and listens for an event

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
