import ProductController from '../controllers/Product.Controller.js'
import {upload} from '../middlewares/file-upload.js'

const routes = application => {
	application.post('/product', upload.single('image'), ProductController.createProduct)
	application.get('/products', ProductController.fetchAllProducts)
}

export default {routes}
