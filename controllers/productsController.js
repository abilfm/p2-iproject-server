const { Product } = require('../models/index.js')
const nodemailer = require('nodemailer')

class ControllerProducts {
  static async findAll(req, res, next)  {
    try {
      const allProducts = await Product.findAll({
        attributes: { exclude: [ "createdAt", "updatedAt" ] }
      })
      res.status(200).json(allProducts)
    } catch (err) {
      next(err)
    }
  }

  static async findAllByCategory(req, res, next)  {
    try {
      const allProductsByCategory = await Product.findAll({ 
        where: { CategoryId: req.params.categoryId }})
      if (allProductsByCategory.length === 0) {
        throw { name: "NOTFOUND_Category" }
      } else {
        res.status(200).json(allProductsByCategory)
      }
    } catch (err) {
      next(err)
    }
  }

  static async findOne(req, res, next)  {
    try {
      const specifiedProduct = await Product.findOne({
        where: 
        {
          CategoryId: req.params.categoryId,
          id: req.params.id
        },
        attributes: { exclude: [ "createdAt", "updatedAt" ] }
      })

      if (specifiedProduct) {
        res.status(200).json(specifiedProduct)
      } else {
        throw { name: "NOTFOUND_Product" }
      }
    } catch (err) {
      next (err)
    }
  }

  static async create(req, res, next)  {
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
      res.status(201).json(newProduct)

      let testAccount = await nodemailer.createTestAccount()
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: 
          {
            user: testAccount.user,
            pass: testAccount.pass
          }
      })

      let info = await transporter.sendMail({
        from: "admin_fmskincarea@mail.com",
        to: "user@mail.com",
        subject: "New Product in FMSKINCAREA",
        text: "New Product",
        html: "<b>Hello world?</b>"
      })

      nodemailer.getTestMessageUrl(info)
    } catch (err) {
      next (err)
    }
  }

  static async update(req, res, next)  {
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
        throw { name: "NOTFOUND_Product" }
      }
    } catch (err) {
      next(err)
    }
  }

  static async delete(req, res, next)  {
    try {
      const selectedProduct = await Product.findByPk(req.params.id)
      if (selectedProduct) {
        await Product.destroy({ where: { id: req.params.id } })
        res.status(200).json({ message: "Product has successfully been deleted" })
      } else {
        throw { name: "NOTFOUND_Product" }
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ControllerProducts