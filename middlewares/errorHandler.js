function errorHandler(err, req, res, next) {
  let errors = []
  let status = err.status || 500
  let message = err.message || "Internal Server Error"

  switch(err.name) {
    case "SequelizeValidationError":
      status = 400
      errors = err.errors.map((error) => error.message)
      break
    case "NOTFOUND_Product":
      status = 404
      errors = "Product is not found"
      break
    case "NOTFOUND_Message":
      status = 404
      errors = "Message is not found"
      break
    case "NOTFOUND_Category":
      status = 404
      errors = "Category ID is not found"
      break
    default:
      errors.push(message)
      break
  }

  res.status(status).json({ errors })
}

module.exports = errorHandler