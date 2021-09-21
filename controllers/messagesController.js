const { Message } = require('../models/index.js')

class ControllerMessages {
  static async create(req, res) {
      
    try {
      res.send('POST Messages')
    } catch (err) {
      
    }
  }
  
  static async delete(req, res) {
    
    try {
      res.send('DELETE Messages')
    } catch (err) {
      
    }
  }
}

module.exports = ControllerMessages