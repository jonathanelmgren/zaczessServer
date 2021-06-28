import ProductModel from '../models/Product.Model.js';
import StatusCode from '../configurations/StatusCode.js';

// Create a product
const createProduct = async (request, response) => {
	const product = new ProductModel({
		title: request.body.title,
		categories: request.body.categories,
		tags: request.body.tags,
		price: request.body.price,
		variations: request.body.variations,
		salePrice: request.body.salePrice,
		amountOfTimesOrdered: request.body.amountOfTimesOrdered
	});

	try {
		const databaseResponse = await product.save();
		response.status(StatusCode.OK).send(databaseResponse);
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message });
	}
};

const createVariation = async (request, response) => {
	const product = {
		$push: {
			variations: request.body.variations
		}
	}
	try {
		const databaseResponse = await ProductModel.findByIdAndUpdate(request.params.productId, product, { useFindAndModify: false, new: true});
		response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message });
	}
};

//Change featured image
const changeFtdImg = async (request, response) => {
	const img = checkIfImgIsPassed(request)
	try {
		const databaseResponse = await ProductModel.findByIdAndUpdate(request.params.productId, img, { useFindAndModify: false, new: true });
		response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message });
	}
};

//Get product by id
const findProductByID = async (request, response) => {
	try {
		const databaseResponse = await ProductModel.findById(request.params.productId);
		response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message });
	}
};

//Change additional images
const changeMltImg = async (request, response) => {

	let images = []
	request.files.forEach((value) => {
		images.push(value.path)
	});

	const img = {
		$push: {
			additionalImages: images
		}
	}
	try {
		const databaseResponse = await ProductModel.findByIdAndUpdate(request.params.productId, img, { useFindAndModify: false, new: true, upsert: true });
		response.status(StatusCode.OK).send(databaseResponse)
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

//
const checkIfImgIsPassed = (request) => {
	let img
	if (request.file !== undefined) {
		img = {
			featuredImage: request.file.path
		}
	} else {
		img = {
			featuredImage: 'src\\images\\featuredImages\\placeholder.png'
		}
	}
	return img
}

export default {
	createProduct,
	fetchAllProducts,
	changeFtdImg,
	changeMltImg,
	createVariation,
	findProductByID
};
