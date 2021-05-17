const { response } = require('express');
const knex = require('../../database/connection');

class CreateCategoriaService{

     async execute({nome}){


     const [id] = await knex.from('Categoria').insert({

      nome

     });

     return{

         id,
         nome 
        
     };


    }
}

module.exports = CreateCategoriaService