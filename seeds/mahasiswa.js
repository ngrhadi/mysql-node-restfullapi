/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("mahasiswa").del();
	await knex("mahasiswa").insert([
		{
			id: 1,
			nama: "John Doe",
			nim: "123456789",
			alamat: "Jl. Kebon Jeruk No. 1",
			email: "jhon@gmailcom",
			password: "12345678",
			role: "mahasiswa",
		},
	]);
};
