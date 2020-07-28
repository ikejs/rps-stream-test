const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: ".env" });
const express = require('express');
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const flash = require("express-flash");

hbs = exphbs.create({
  defaultLayout: "main"
});
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', {
    ytkey: process.env.ytkey
  })
});

app.listen(process.env.PORT || 3000, () => console.log('Started!'))