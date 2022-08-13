// Update with your config settings.
const pg = require("pg");
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	// client: "pg",
	// connection: {
	// 	database: "postgres",
	// 	user: "postgres",
	// 	password: "password",
	// 	port: 5432,
	// 	host: "localhost",
	// },
	client: "mysql",
	connection: {
		host: "127.0.0.1",
		port: "3306",
		user: "root",
		password: "passWORD13!#",
		database: "mysql",
	},
};
