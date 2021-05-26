const { response } = require('express');
const knex = require('../../database/connection');

class CreateProductService{
	async execute({nome, preco, proprietario, id_categoria}){		
		const [categoria] = await knex('Categoria').select('*').where({
			'id':id_categoria
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
			'id_categoria':id_categoria,
			'id_produto':id
		});

		return {
			id,
			nome,
			preco,
			proprietario,
			"categoria":categoria.nome
		};
		
	}
}

module.exports = CreateProductService;