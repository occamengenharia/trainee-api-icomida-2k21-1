const up = (knex) => {
	return knex
	.schema
	.createTable('CategoriaProduto', table => {
	  table.increments('id').primary();
	  table.integer('id_categoria').notNullable().references('id').inTable('Categoria')
	  table.integer('id_produto').notNullable().references('id').inTable('Produto')
	})
  }
  
  const down = (knex) => {
	return knex
	.schema
	.dropTable('CategoriaProduto');
  }
  
  module.exports = { up, down }