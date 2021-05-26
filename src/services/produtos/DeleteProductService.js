const { response } = require('express');
const knex = require('../../database/connection');

class DeleteProductService{
	async execute({id}){

		const [produto] = await knex('Produto').select('*').where({
			id
		});

		if(!produto){
			throw new Error('produto não encontrado');
		}

		await knex.from('Produto').where({
			id
		}).del();
		
		return produto;
		
	}
}

  module.exports = DeleteProductService;