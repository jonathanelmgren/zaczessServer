import OrderController from '../controllers/Order.Controller.js'

const routes = (application) => {
	application.post('/order/add', OrderController.createOrder)
	application.get('/order/get/:orderid', OrderController.fetchOrder)
}

export default { routes }
