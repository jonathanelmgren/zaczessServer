import StatusCode from '../configurations/StatusCode.js'
import CategoryModel from '../models/Category.Model.js'
import SubCategoryModel from '../models/SubCategory.Model.js'

const createSubCategory = async (request, response) => {
	const subcategory = new SubCategoryModel({
		name: request.body.name,
	})
	try {
		const category = await CategoryModel.findById({ _id: request.body.parent })
		subcategory.parent = category
		category.subcategories.push(subcategory)
        await category.save()
		const databaseResponse = await subcategory.save()
		response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}
const getAllSubCategories = async (request, response) => {
	try {
		const databaseResponse = await SubCategoryModel.find()
		return response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

export default { createSubCategory , getAllSubCategories}
