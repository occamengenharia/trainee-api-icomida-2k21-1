const { response } = require('express');
const knex = require('../database/connection');

class CreateProductService{
	async execute({nome, preco, proprietario}){
		const [id] = await knex.from('Produto').insert({
			nome,
			preco,
			proprietario
		});
		//throw new Error();
		return {
			id,
			nome,
			preco,
			proprietario
		};
	}
}

module.exports = CreateProductService;