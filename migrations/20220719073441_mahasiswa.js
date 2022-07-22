/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	await knex.schema.createTable("mahasiswa", (table) => {
		table.increments("id").primary();
		table.string("nama").notNullable();
		table.string("nim").notNullable();
		table.string("alamat").notNullable();
		table.string("email").notNullable();
		table.string("password").notNullable();
		table.string("role").notNullable();
	});

	return true;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
	await knex.schema.dropTable("mahasiswa");
};
