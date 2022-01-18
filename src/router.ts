import { NextFunction, Request, Response, Router } from 'express'
import { HttpException } from './exceptions'
import productRoute from './routes/product.route'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Negostor API' })
})

router.use('/products', productRoute)

router.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof HttpException) {
    res
      .status(error.status)
      .json({ message: error.message, status: error.status, error: error.error })
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    console.log(error)
  }

  res
    .status(500)
    .json({ message: 'Something went wrong', status: 500, error: 'Internal Server Error' })
})

export default router
