const { response } = require('express');
const knex = require('../../database/connection');


class ListCategoriaService{

	async execute() {
		const categoria = await knex('Categoria').select('*');

		return categoria;
	}
}

module.exports = ListCategoriaService;