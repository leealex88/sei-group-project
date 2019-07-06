const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')



function register(req, res) {
  console.log(req.body)
  User
    .create(req.body)
    .then(user => res.status(201).json({
      message: `Congratulations ${user.username}, you have been accepted into this very exclusive club! Well Done You!`
    }))
    .catch(err => console.log(err))
}


function  login(req, res) {
  console.log(req)
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
    .catch((err) => console.log(err))
}

function showUser(req, res, next) {

  console.log( req.params)
  User
    .findById(req.params.userid)
    .populate('user')

    .then(users => res.status(200).json(users))
    .catch(next)
}

function showUsers(req, res) {
  console.log(req.body)
  User
    .find(req.query)
    .then(users => res.status(200).json(users))
    .catch(err => console.log(err))
}


module.exports = {
  login: login,
  register: register,
  showUser: showUser,
  showUsers: showUsers

}
