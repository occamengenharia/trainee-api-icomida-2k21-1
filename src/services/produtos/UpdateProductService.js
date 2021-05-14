const { response } = require('express');
const knex = require('../../database/connection');

class UpdateProductService{

	async execute({id,nome,preco,proprietario,}){
		
		const [produto] = await knex('Produto').select('*').where({
			id
		});
		if(!produto){
			throw new Error('usuário não encontrado')
		}
		
		const newproduto = {

			nome: nome || produto.nome,
			phone: preco || produto.preco,
			email: proprietario || produto.proprietario

		}

		await knex.from('Produto').where({
			id
		}).update({

			nome: newproduto.nome,
			preco: newproduto.preco,
			proprietario: newproduto.proprietario

		});

		return {
			message: "atualizado com sucesso"
		};
	}
}

module.exports = UpdateProductService;