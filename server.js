import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import path from 'path'

import Configurations from './src/configurations/Configurations.js'
import Middlewares from './src/middlewares/Middlewares.js'
import ProductRoutes from './src/routes/Product.Routes.js'
import CategoryRoutes from './src/routes/Category.Routes.js'
import SubCategoryRoutes from './src/routes/SubCategory.Routes.js'
import OrderRoutes from './src/routes/Order.Routes.js'

const application = express()
application.use(express.json())
application.use(morgan('common'))
application.use(helmet())
application.use(cors())
application.use('/src/images', express.static(path.join('src', 'images')))

ProductRoutes.routes(application)
CategoryRoutes.routes(application)
SubCategoryRoutes.routes(application)
OrderRoutes.routes(application)

application.use(Middlewares.notFound)

Configurations.connectToPort(application)
Configurations.connectToDatabase()
