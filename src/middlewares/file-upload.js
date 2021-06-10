import multer from 'multer'

export const uploadSingle = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, 'src/images/featuredImages')
		},
		filename: (req, file, cb) => {
			cb(null, Date.now() + "--" + file.originalname)
		}
	})
})

export const uploadMultiple = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, 'src/images/additionalImages')
		},
		filename: (req, file, cb) => {
			cb(null, Date.now() + "--" + file.originalname)
		}
	})
})