import StatusCode from '../configurations/StatusCode.js'
import CategoryModel from '../models/Category.Model.js'

const createCategory = async (request, response) => {
	const category = new CategoryModel({
		name: request.body.name,
	})
	try {
		const databaseResponse = await category.save()
		response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}
const getAllCategories = async (request, response) => {
	try {
		const databaseResponse = await CategoryModel.find().populate('products').populate({path: 'subcategories', populate: { path: 'products' } })
		return response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

export default { createCategory, getAllCategories }
