const { response } = require('express');
const knex = require('../../database/connection');

class ListProductService{

	async execute() {
		const produtos = await knex('Produto').select('*');

		return produtos;
	}
}

module.exports = ListProductService;