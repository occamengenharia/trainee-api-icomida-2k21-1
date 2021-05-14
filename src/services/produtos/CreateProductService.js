const { response } = require('express');
const knex = require('../../database/connection');

class CreateProductService{
	async execute({nome, preco, proprietario}){

		const [id] = await knex.from('Produto').insert({
			nome,
			preco,
			proprietario
		});

		return {
			id,
			nome,
			preco,
			proprietario
		};
		
	}
}

module.exports = CreateProductService;