import ProductController from '../controllers/Product.Controller.js'
import {uploadSingle} from '../middlewares/file-upload.js'
import {uploadMultiple} from '../middlewares/file-upload.js'

const routes = application => {
	application.post('/product', ProductController.createProduct)
	application.post('/product/:productId/mltimg', uploadMultiple.array('additionalImages', 6), ProductController.changeMltImg)
	application.post('/product/:productId/variation', ProductController.createVariation)
	application.put('/product/:productId/ftdimg', uploadSingle.single('featuredImage'), ProductController.changeFtdImg)
	application.get('/products', ProductController.fetchAllProducts)
	application.get('/product/:productId', ProductController.findProductByID)
}

export default {routes}
