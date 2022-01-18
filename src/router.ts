import { Router } from 'express'
import productRoute from './routes/product.route'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Negostor API' })
})

router.use('/products', productRoute)

export default router
