const CreateCategoriaService = require('../services/Categorias/CreateCategoriaService');
const ListCategoriaService = require('../services/Categorias/ListCategoriaService');
const ShowCategoriaService = require('../services/Categorias/ShowCategoriaService');
const UpdateCategoriaService = require('../services/Categorias/UpdateCategoriaService');
const DeleteCategoriaService = require('../services/Categorias/DeleteCategoriaService');

class CategoriasContoller{

    async create(request,response){
		const {nome} = request.body;
		console.log("oie");

		const CCS = new CreateCategoriaService();

		const data = await CCS.execute({nome});

		return response.json(data);
	}
    async list(request,response){
		console.log("oie");
		const LCS = new ListCategoriaService();

		const data = await LCS.execute();

		return response.json(data);
	}
    async show(request,response){
		const {id} = request.params;

		const SCS = new ShowCategoriaService();

		const data = await SCS.execute({id})

		return response.json(data);
	}

	async delete(request,response){
		const {id} = request.params;

		const DCS = new DeleteCategoriaService();

		const data = await DCS.execute({id});

		return response.json(data);
	}

	async update(request,response){
		const {id} = request.params;

		const {nome} = request.body;

		const UCS = new UpdateCategoriaService();

		const data = await UCS.execute({id});

		return response.json(data);
	}

}



module.exports = CategoriasContoller;