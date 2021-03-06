const { response } = require('express');
const knex = require('../../database/connection');

class ShowProductService{
	async execute({id}){
		
		const [produto] = await knex('Produto').select('*').where({
			id
		});

		if(!produto){
			throw new Error('usuário não encontrado');
		}

		return produto;
		
	}
}

module.exports = ShowProductService;