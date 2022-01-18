import { Router } from 'express'
import productController from '../controllers/product.controller'

const productRoute = Router()

productRoute.get('/', productController.getProducts)
productRoute.post('/', productController.createProduct)

productRoute.get('/:productId', productController.getProduct)
productRoute.patch('/:productId', productController.updateProduct)
productRoute.delete('/:productId', productController.deleteProduct)

export default productRoute
