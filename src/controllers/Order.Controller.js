import axios from 'axios'

const KlarnaAPI = axios.create({
	baseURL: 'https://api.playground.klarna.com/checkout/v3/',
	headers: { 'Content-Type': 'application/json' },
	auth: {
		username: 'PK34732_725e50fcfdff',
		password: '2Gu1K34Rm6zvT7lB',
	},
})

const fetchOrder = async (request, response) => {
	try {
		const res = await KlarnaAPI.get(`https://api.playground.klarna.com/checkout/v3/orders/${request.params.orderid}`)
		response.status(200).send(res.data)
	} catch (error) {
        console.log(error.message)
		response.status(500).send({ message: error.message })
	}
}
const createOrder = async (request, response) => {
	try {
		const res = await KlarnaAPI.post('https://api.playground.klarna.com/checkout/v3/orders', request.body)
		response.status(200).send(res.data)
	} catch (error) {
        console.log(error.message)
		response.status(500).send({ message: error.message })
	}
}

export default { createOrder,fetchOrder }
