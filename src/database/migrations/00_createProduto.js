const up = (knex) => {
	return knex
	.schema
	.createTable('Produto', table => {
	  table.increments('id').primary();
	  table.string('nome', 50).notNullable;
	  table.float('preco').notNullable;
	  table.string('proprietario', 50).notNullable;
	})
  }
  
  const down = (knex) => {
	return knex
	.schema
	.dropTable('Produto');
  }
  
  module.exports = { up, down }