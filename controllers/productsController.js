const { Product } = require('../models/index.js')

class ControllerProducts {
  static async findAll(req, res)  {
    try {
      const allProducts = await Product.findAll({
        attributes: {
          exclude: [ "createdAt", "updatedAt" ]
        }
      })
      res.status(200).json(allProducts)
    } catch (err) {
      let status = err.status || 500
      let message = err.message || "Internal Server Error"

      res.status(status).json({ message })
    }
  }

  static async findAllByCategory(req, res)  {
    try {
      const allProductsByCategory = await Product.findAll({ where: { CategoryId: req.params.categoryId }})
      if (allProductsByCategory.length === 0) {
        throw { status: 404, message: "Category ID is not found" }
      } else {
        res.status(200).json(allProductsByCategory)
      }
    } catch (err) {
      let status = err.status || 500
      let message = err.message || "Internal Server Error"

      res.status(status).json({ message })
    }
  }

  static async findOne(req, res)  {
    try {
      const specifiedProduct = await Product.findOne({
        where: 
        {
          CategoryId: req.params.categoryId,
          id: req.params.id
        }
      })

      if (specifiedProduct) {
        res.status(200).json(specifiedProduct)
      } else {
        throw { status: 404, message: "Product is not found" }
      }
    } catch (err) {
      let status = err.status || 500
      let message = err.message || "Internal Server Error"

      res.status(status).json({ message })
    }
  }

  static async create(req, res)  {
    const dataProduct = {
      brand_name: req.body.brand_name,
      product_name: req.body.product_name,
      size: req.body.size,
      bpom_nnumber: req.body.bpom_number,
      description: req.body.description,
      how_to_use: req.body.how_to_use,
      ingredients_list: req.body.ingredients_list,
      image_URL: req.body.image_URL,
      marketplace_URL: req.body.marketplace_URL,
      social_media_URL: req.body.social_media_URL,
      CategoryId: req.body.CategoryId
    }

    try {
      const newProduct = await Product.create(dataProduct)
      res.status(200).json(newProduct)
    } catch (err) {
      let status = err.status || 500
      let message = err.message || "Internal Server Error"

      if (err.name === "SequelizeValidationError") {
        status = 400
        message = err.errors.map((error) => error.message)
      }

      res.status(status).json({ message })
    }
  }

  static async update(req, res)  {
    const updateDataProduct = {
      brand_name: req.body.brand_name,
      product_name: req.body.product_name,
      size: req.body.size,
      bpom_nnumber: req.body.bpom_number,
      description: req.body.description,
      how_to_use: req.body.how_to_use,
      ingredients_list: req.body.ingredients_list,
      image_URL: req.body.image_URL,
      marketplace_URL: req.body.marketplace_URL,
      social_media_URL: req.body.social_media_URL,
      CategoryId: req.body.CategoryId
    }

    try {
      const selectedProduct = await News.findByPk(req.params.id)
      if (selectedProduct) {
        const updatedProduct = await Product.update(updateDataProduct, { where: { id: req.params.id, } })
        res.status(200).json(updatedProduct[1][0])
      } else {
        throw { status: 404, message: "Product is not found" }
      }
    } catch (err) {
      let status = err.status || 500
      let message = err.message || "Internal Server Error"

      if (err.name === "SequelizeValidationError") {
        status = 400
        message = err.errors.map((error) => error.message)
      }

      res.status(status).json({ message })
    }
  }

  static async delete(req, res)  {
    try {
      const selectedProduct = await Product.findByPk(req.params.id)
      if (selectedProduct) {
        await Product.destroy({ where: { id: req.params.id } })
        res.status(200).json({ message: "Product has successfully been deleted" })
      } else {
        throw { status: 404, message: "Product is not found" }
      }
      res.send('DELETE Products')
    } catch (err) {
      let status = err.status || 500
      let message = err.message || "Internal Server Error"

      res.status(status).json({ message })
    }
  }
}

module.exports = ControllerProducts