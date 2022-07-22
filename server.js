const express = require("express");
const http = require("http");
const path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var methodOverride = require("method-override");
var session = require("express-session");
var bodyParser = require("body-parser");
var multer = require("multer");
var errorHandler = require("errorhandler");

const routerMahasiswa = require("./routes/mahasiswa");

const app = express();
const port = 4000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(methodOverride());
app.use(session({ secret: "jhosbush", resave: true, saveUninitialized: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(multer({ dest: "./uploads" }).any());
app.use(express.static(path.join(__dirname, "public")));

app.use("/mahasiswa", routerMahasiswa);
app.use("/", function getHome(req, res) {
	res.render("index", { title: "Home", message: "Add Data Mahasiswa" });
});
if (app.get("env") === "development") {
	app.use(errorHandler());
}

http.createServer(app).listen(port);
