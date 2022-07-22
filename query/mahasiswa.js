const getMahasiswa = "SELECT * FROM mahasiswa";

const getMahsiswaById = "SELECT * FROM mahasiswa HAVING id = ";

const getRoleMahasiswa = "SELECT * FROM mahasiswa HAVING role = ";

const updateMahasiswa =
	"UPDATE mahasiswa SET nama = ?, nim = ?, alamat = ?, email = ?, password = ?, role = ? WHERE id = ";

const addMahasiswa =
	"INSERT INTO mahasiswa (nama, nim, alamat, email, password, role) VALUES (?, ?, ?, ?, ?, ?)";

const deleteMahasiswa = "DELETE FROM mahasiswa WHERE id = ";

module.exports = {
	getMahasiswa,
	getMahsiswaById,
	getRoleMahasiswa,
	updateMahasiswa,
	addMahasiswa,
	deleteMahasiswa,
};
