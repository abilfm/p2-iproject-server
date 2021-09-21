const { Product } = require('../models/index.js')

class ControllerProducts {
  static async findAll(req, res)  {

    try {
      res.send('GET Products')
    } catch (err) {
      
    }
  }

  static async findAllByCategory(req, res)  {
    
    try {
      res.send('GET Products by Category')
    } catch (err) {
      
    }
  }

  static async findByPk(req, res)  {
    
    try {
      res.send('GET Products by ID')
    } catch (err) {
      
    }
  }

  static async create(req, res)  {
    
    try {
      res.send('POST Products')
    } catch (err) {
      
    }
  }

  static async update(req, res)  {
    
    try {
      res.send('UPDATE Products')
    } catch (err) {
      
    }
  }

  static async delete(req, res)  {
    
    try {
      res.send('DELETE Products')
    } catch (err) {
      
    }
  }
}

module.exports = ControllerProducts