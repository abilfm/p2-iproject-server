const { Message } = require('../models/index.js')

class ControllerMessages {
  static async create(req, res, next) {
    const message = {
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
    }

    try {
      const clientMessage = await Message.create(message)
      res.status(201).json(clientMessage)
    } catch (err) {
      next(err)
    }
  }
  
  static async delete(req, res, next) {
    try {
      const selectedMessage = await Message.findByPk(req.params.id)
      if (selectedMessage) {
        await Message.destroy({ where: { id: req.params.id } })
        res.status(200).json({ message: "Message has successfully been deleted" })
      } else {
        throw { name: "NOTFOUND_Message" }
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ControllerMessages