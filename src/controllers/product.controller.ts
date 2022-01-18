import { Handler } from 'express'

class ProductController {
  getProducts: Handler = async (req, res, next) => {
    try {
      res.json({ data: { products: [] } })
    } catch (error) {
      next(error)
    }
  }

  createProduct: Handler = async (req, res, next) => {
    try {
      res.json({ data: { product: null } })
    } catch (error) {
      next(error)
    }
  }

  getProduct: Handler = async (req, res, next) => {
    try {
      res.json({ data: { product: null } })
    } catch (error) {
      next(error)
    }
  }

  updateProduct: Handler = async (req, res, next) => {
    try {
      res.json({ data: { product: null } })
    } catch (error) {
      next(error)
    }
  }

  deleteProduct: Handler = async (req, res, next) => {
    try {
      res.json({ data: { product: null } })
    } catch (error) {
      next(error)
    }
  }
}

export default new ProductController()
