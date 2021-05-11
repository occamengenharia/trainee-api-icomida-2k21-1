const up = (knex) => {
	return knex
	.schema
	.createTable('Categoria', table => {
	  table.increments('id').primary();
	  table.string('Nome', 50).notNullable;
	 
	})
  }
  
  const down = (knex) => {
	return knex
	.schema
	.dropTable('Categoria');
  }
  
  module.exports = { up, down }