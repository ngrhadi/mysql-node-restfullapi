const queries = require("../query/mahasiswa");
const knex = require("../knexfile");
const db = require("knex")(knex);

const mysql = require("mysql");
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "mysql",
});

connection.connect((err) => {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

const getMahasiswa = async (req, res) => {
	try {
		connection.query(queries.getMahasiswa, (err, result) => {
			if (err) throw err;
			res.send(result);
		});
	} catch (error) {
		throw error;
	}
};

const getMahsiswaById = async (req, res) => {
	try {
		let id = req.params.id;
		connection.query(
			queries.getMahsiswaById + mysql.escape(id),
			(err, result) => {
				if (err) throw err;
				res.status(200).send(result);
			},
		);
	} catch (error) {
		throw error;
	}
};

const getRoleMahasiswa = async (req, res) => {
	try {
		let role = req.params.role;
		connection.query(
			queries.getRoleMahasiswa + mysql.escape(role),
			(err, result) => {
				if (err) throw err;
				res.status(200).send(result);
			},
		);
	} catch (error) {
		throw error;
	}
};

const updateMahasiswa = async (req, res) => {
	const id = req.params.id;
	const { nama, nim, alamat, email, password, role } = req.body;
	try {
		connection.query(
			queries.updateMahasiswa + mysql.escape(id),
			[nama, nim, alamat, email, password, role],
			(err, result) => {
				if (err) throw err;
				res.status(200).send(result);
			},
		);
	} catch (error) {
		throw error;
	}
};

const addMahasiswa = async (req, res) => {
	const { nama, nim, alamat, email, password, role } = req.body;
	try {
		connection.query(
			queries.addMahasiswa,
			[nama, nim, alamat, email, password, role],
			(err, result) => {
				if (err) throw err;
				res.status(200).send(result);
			},
		);
	} catch (error) {
		throw error;
	}
};

const deleteMahasiswa = async (req, res) => {
	const id = req.params.id;
	try {
		connection.query(
			queries.deleteMahasiswa + mysql.escape(id),
			(err, result) => {
				if (err) throw err;
				res.status(200).send(result);
			},
		);
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getMahasiswa,
	getMahsiswaById,
	getRoleMahasiswa,
	updateMahasiswa,
	addMahasiswa,
	deleteMahasiswa,
};
