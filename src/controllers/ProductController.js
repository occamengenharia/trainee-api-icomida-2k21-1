const CreateProductService = require('../services/produtos/CreateProductService');
const DeleteProductService = require('../services/produtos/DeleteProductService');
const ListProductService = require('../services/produtos/ListProductService');
const ShowProductService = require('../services/produtos/ShowProductService');
const UpdateProductService = require('../services/produtos/UpdateProductService');

class ProductController{

	async create(request,response){
		const {nome,preco,proprietario} = request.body;

		const CPS = new CreateProductService();

		const data = await CPS.execute({nome,preco,proprietario});

		return response.json(data);
	}

	async list(request,response){
		const LPS = new ListProductService();

		const data = await LPS.execute();

		return response.json(data);
	}

	async show(request,response){
		const {id} = request.params;

		const SPS = new ShowProductService();

		const data = await SPS.execute({id})

		return response.json(data);
	}

	async delete(request,response){
		const {id} = request.params;

		const DPS = new DeleteProductService();

		const data = await DPS.execute({id});

		return response.json(data);
	}

	async update(request,response){
		const {id} = request.params;

		const {nome,preco,proprietario} = request.body;

		const UPS = new UpdateProductService();

		const data = await UPS.execute({id,nome,preco,proprietario});

		return response.json(data);
	}
	
}

module.exports = ProductController;