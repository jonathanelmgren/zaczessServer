import StatusCode from "../configurations/StatusCode.js"
import multer from 'multer'

const notFound = (request, response, next) => {
	const error = new Error(`Not Found: ${request.originalUrl}`)
	response.status(StatusCode.NOT_FOUND)
	next(error)
}

export default { notFound }