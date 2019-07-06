const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')


function register(req, res, next) {
  console.log(req, res)
  User
    .create(req.body, console.log(req.body))
    .then(user => res.status(201).json({
      message: `Congratulations ${user.username}, you have been accepted into this very exclusive club! Well Done You!`
    }))
    .catch(next)
}


function  login(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      console.log(req.body)
      if (!user || !user.validatePassword(req.body.password)) {
        throw new Error('Unauthorized')
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '72h' })
      res.status(200).json({ message: `Why hello there ${user.username}, it's nice to see you again!`,
        token
      })
    })
    .catch(next)
}

module.exports = {
  login: login,
  register: register

}
