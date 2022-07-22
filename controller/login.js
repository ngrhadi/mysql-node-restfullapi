const queryLogin = require("../query/login");
const jwt = require("jsonwebtoken");
const { connection } = require("../config-db");
const cookie = require("cookie");

const loginAsMahasiswa = async (req, res) => {
	const { email, password } = req.body;
	try {
		connection.query(queryLogin.login, [email, password], (err, result) => {
			if (err) throw err;
			if (result.length === 0) {
				res.status(401).send("Email atau password salah");
			} else {
				const token = jwt.sign(
					{
						id: result[0].id,
						email: result[0].email,
						role: result[0].role,
					},
					"secretPisanYaking",
					{ expiresIn: "1h" },
				);
				res.setHeader(
					"Set-Cookie",
					cookie.serialize("token", token, {
						httpOnly: true,
						maxAge: 60 * 60 * 1000,
						path: "/login/mahasiswa",
					}),
				);
				res.setHeader("Location", "/");
				res.status(302).send("Please wait...");
				//    res.end();
				// return;
			}
		});
	} catch (error) {
		throw error;
	}
};

const accessResources = async (req, res) => {
	const token = req.headers.authorization.split(" ")[1];
	if (token) {
		jwt.verify(token, "secretPisanYaking", (err, decoded) => {
			if (err) {
				res.status(401).send("Token invalid");
			} else {
				cookie.serialize("token", token, {
					httpOnly: true,
					maxAge: 60 * 60 * 1000,
					path: "/",
				});
				res.setHeader("Location", "/");
				res.status(200).send(decoded);
			}
		});
	} else {
		res.status(401).send("Token invalid");
	}
};

module.exports = {
	loginAsMahasiswa,
	accessResources,
};
