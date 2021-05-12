const CreateProductService = require('../services/CreateProductService');

class ProductController{
	async create(request,response){
		const {nome,preco,proprietario} = request.body;

		const CPS = new CreateProductService();

		const data = await CPS.execute({nome,preco,proprietario});

		return response.json(data);
	}
}

module.exports = ProductController;