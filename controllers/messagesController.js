const { Message } = require('../models/index.js')

class ControllerMessages {
  static async create(req, res) {
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
      let status = err.status || 500
      let message = err.message || "Internal Server Error"

      if (err.name === "SequelizeValidationError") {
        status = 400
        message = err.errors.map((error) => error.message)
      }

      res.status(status).json({ message })
    }
  }
  
  static async delete(req, res) {
    try {
      const selectedMessage = await Message.findByPk(req.params.id)
      if (selectedMessage) {
        await Message.destroy({ where: { id: req.params.id } })
        res.status(200).json({ message: "Message has successfully been deleted" })
      } else {
        throw { status: 404, message: "Message is not found"}
      }
    } catch (err) {
      let status = err.status || 500
      let message = err.message || "Internal Server Error"

      res.status(status).json({ message })
    }
  }
}

module.exports = ControllerMessages