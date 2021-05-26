const { response } = require('express');
const knex = require('../../database/connection');

class CreateProductService{
	async execute({nome, preco, proprietario, id_categoria}){		
		const [categoria] = await knex('Categoria').select('*').where({
			id_categoria
		});
		
		if(!categoria){
			throw new Error('categoria não encontrada');
		}

		const [id] = await knex.from('Produto').insert({
			nome,
			preco,
			proprietario
		});

		await knex.from('CategoriaProduto').insert({
			id_categoria,
			id
		});

		nomeCategoria = categoria.nome

		return {
			id,
			nome,
			preco,
			proprietario,
			nomeCategoria
		};
		
	}
}

module.exports = CreateProductService;