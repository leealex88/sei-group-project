function errorHandler(err, req, res, next) {
  if (err.message === 'Not Found') return res.status(404).json({ message: 'Not Found' })

  next(err)
}

module.exports = errorHandler
