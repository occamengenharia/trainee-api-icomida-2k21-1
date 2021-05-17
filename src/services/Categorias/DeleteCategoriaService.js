const { response } = require('express');
const knex = require('../../database/connection');

class DeleteCategoriaService{
	async execute({id}){

		const [Categoria] = await knex('Categoria').select('*').where({
			id
		});

		if(!Categoria){
			throw new Error('Categoria não encontrada');
		}

		return Categoria;
		
	}
}

  module.exports = DeleteCategoriaService;