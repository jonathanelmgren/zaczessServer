import CategoryController from '../controllers/Category.Controller.js'

const routes = (application) => {
	application.get('/categories', CategoryController.getAllCategories)
	application.post('/categories/add', CategoryController.createCategory)
}

export default { routes }
