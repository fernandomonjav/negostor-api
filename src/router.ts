import { NextFunction, Request, Response, Router } from 'express'
import productRoute from './routes/product.route'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Negostor API' })
})

router.use('/products', productRoute)

router.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(error)
  }

  res
    .status(500)
    .json({ status: 500, message: 'Something went wrong', error: 'Internal Server Error' })
})

export default router
