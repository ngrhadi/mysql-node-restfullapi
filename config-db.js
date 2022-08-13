const mysql = require("mysql");
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "passWORD13!#",
	database: "mysql",
});

connection.connect((err) => {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected :" + connection.threadId);
});

module.exports = { connection };
