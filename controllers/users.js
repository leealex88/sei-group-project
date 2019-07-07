const User = require('../models/user')
const Event = require('../models/event')
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


function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      console.log(req.body)
      if (!user || !user.validatePassword(req.body.password)) {
        console.log('unauthorized')
        throw new Error('Unauthorized')
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '72h' })
      console.log(token)
      res.status(200).json({ message: `Why hello there ${user.username}, it's nice to see you again!`,
        token
      })
    })
    .catch((err) => console.log(err))
}

function showUser(req, res, next) {
  User
    .findById(req.params.userid)
    .populate('user')
    .then(users => res.status(200).json(users))
    .catch(next)
}



//users own profile
function showCurrentUser(req, res, next) {
  req.body.user = req.currentUser
  console.log(req.body.user._id)
  User
    .findById(req.body.user._id)
    .then(user => res.status(201).json(user))
    .catch(next)
}
//user's own created event
function showCreatedEvents(req, res, next) {
  req.body.user = req.currentUser
  console.log(req.body.user._id)
  Event
    .find({ user: req.body.user._id } )
    .then(event => res.status(201).json(event))
    .catch(next)
}

//created events of specific user
function showTheirEvents(req, res, next) {

  console.log(req.params.id)
  Event
    .find({ user: req.params.id } )
    .then(event => res.status(201).json(event))
    .catch(next)
}









function showUsers(req, res) {
  User
    .find(req.query)
    .then(users => res.status(200).json(users))
    .catch(err => console.log(err))
}

function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not found' })
      user.comments.push(req.body)
      return user.save()
    })
    .then(user => res.status(201).json(user))
    .catch(err => res.json(err))
}


function commentDeleteRoute(req, res) {
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not found' })
      const comment = user.comments.id(req.params.commentId)
      comment.remove()
      return user.save()
    })
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}


module.exports = {
  login: login,
  register: register,
  showUser: showUser,
  showUsers: showUsers,
  userCommentCreate: commentCreateRoute,
  userCommentDelete: commentDeleteRoute,
  showCurrentUser: showCurrentUser,
  showCreatedEvents: showCreatedEvents,
  showTheirEvents: showTheirEvents

}
