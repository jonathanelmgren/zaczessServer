import ProductModel from '../models/Product.Model.js';
import StatusCode from '../configurations/StatusCode.js';

// Create a product
const createProduct = async (request, response) => {
	const product = new ProductModel({
		title: request.body.title,
		categories: request.body.categories,
		tags: request.body.tags,
		price: request.body.price,
		variation: request.body.variation,
		image: request.file.path
	});

	try {
		const databaseResponse = await product.save();
		response.status(StatusCode.OK).send(databaseResponse);
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message });
	}
};

//Fetch all products
const fetchAllProducts = async (request, response) => {
	try {
		const databaseResponse = await ProductModel.find();
		return response.status(StatusCode.OK).send(databaseResponse);
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message });
	}
};

export default {
	createProduct,
	fetchAllProducts,
};
