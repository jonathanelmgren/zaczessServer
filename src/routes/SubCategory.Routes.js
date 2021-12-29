import SubCategoryController from "../controllers/SubCategory.Controller.js"

const routes = (application) => {
	application.post('/subcategories/add', SubCategoryController.createSubCategory)
	application.get('/subcategories', SubCategoryController.getAllSubCategories)
}

export default { routes }
