const checkEmail = "SELECT * FROM mahasiswa WHERE email = ?";

const checkPassword = "SELECT * FROM mahasiswa WHERE password = ?";

const existingMahasiswa = "SELECT * FROM mahasiswa";

const login = "SELECT * FROM mahasiswa WHERE email = ? AND password = ?";

module.exports = {
	checkEmail,
	checkPassword,
	existingMahasiswa,
	login,
};
