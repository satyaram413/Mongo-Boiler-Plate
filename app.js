var express = require("express");
var app = express();
var bodyParser=require('body-parser')
var homeController = require("./controllers/homeController");

app.use(
    bodyParser.urlencoded({
      extended: true
    })
   );
var path = require("path");

//setup template engine
app.set("view engine", "ejs");

//static files
app.use(express.static(path.join(__dirname, "public")));


homeController(app);


// if it is outside the assets folder then remove the route
app.listen(3000);
console.log("You are listening to port 3000");
