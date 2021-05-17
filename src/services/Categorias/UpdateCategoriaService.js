
const { response } = require('express');
const knex = require('../../database/connection');

class UpdateProductService{

	async execute({id,nome,}){
		
		const [categoria] = await knex('Categoria').select('*').where({
			id
		});
		if(!categoria){
			throw new Error('categoria não encontrada')
		}
		
		const newCategoria = {

			nome: nome || categoria.nome,
			

		}

		await knex.from('Categoria').where({
			id
		}).update({

			nome: newCategoria.nome,
			

		});

		return {
			message: "sucess"
		};
	}
}

module.exports = UpdateProductService;