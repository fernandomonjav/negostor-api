import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Negostor API' })
})

export default router
