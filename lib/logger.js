function logger(req, res, next) {
  console.log(`${req.method} requested to ${req.url}`)
  next()
}

module.exports = logger
