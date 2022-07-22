const express = require("express");
const http = require("http");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const bodyParser = require("body-parser");
const multer = require("multer");
const errorHandler = require("errorhandler");
const cookieParser = require("cookie-parser");

const routerMahasiswa = require("./routes/mahasiswa");

const app = express();
const port = 4000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(methodOverride());
app.use(session({ secret: "jhosbush", resave: true, saveUninitialized: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(multer({ dest: "./uploads" }).any());
app.use(express.static(path.join(__dirname, "public")));

app.use("/mahasiswa", routerMahasiswa, function (req, res, next) {
	console.log("Cookie: " + req.cookies);

	console.log("Session: " + req.session);
	console.log("Signed Cookies: " + req.signedCookies);
});

app.use("/", function getHome(req, res) {
	res.render("index", { title: "Home", message: "Add Data Mahasiswa" });
});
if (app.get("env") === "development") {
	app.use(errorHandler());
}

http.createServer(app).listen(port);
