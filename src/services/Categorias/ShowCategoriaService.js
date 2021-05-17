const { response } = require('express');
const knex = require('../../database/connection');

class ShowCategoriaService{
	async execute({id}){
		
		const [categoria] = await knex('Categoria').select('*').where({
			id
		});

		if(!categoria){
			throw new Error('categoria não encontrada');
		}

		return produto;
		
	}
}

module.exports = ShowCategoriaService;