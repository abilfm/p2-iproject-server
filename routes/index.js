const express = require('express')
const controllerMessages = require('../controllers/messagesController.js')
const controllerProducts = require('../controllers/productsController.js')
const router = express.Router()

router.get('/products', controllerProducts.findAll)
router.get('/products/:categoryId', controllerProducts.findAllByCategory)
router.get('/products/:id', controllerProducts.findByPk)
router.post('/products', controllerProducts.create)
router.put('/products/:id', controllerProducts.update)
router.delete('/products/:id', controllerProducts.delete)

router.post('/messages', controllerMessages.create)
router.post('/messages', controllerMessages.delete)
  
module.exports = router