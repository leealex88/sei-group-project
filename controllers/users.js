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

function updateProfile(req, res) {
  console.log(req.body)
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) throw new Error('Not Found')

      user.interests.push(req.body.interests)
      // Object.assign(user, req.body)
      return user.save()
    })
    .then(user => res.status(202).json(user))
    .catch(err => console.log(err))
}

function updateAvatar(req, res) {
  console.log(req.body)
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) throw new Error('Not Found')

      user.avatar = req.body.avatar
      // Object.assign(user, req.body)
      return user.save()
    })
    .then(user => res.status(202).json(user))
    .catch(err => console.log(err))
}





function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .populate('user')
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
    .populate('user')
    .then(user => res.status(201).json(user))
    .catch(next)
}

//users own profile
function getCurrentUser(req, res, next) {
  User
    .findById(req.currentUser._id)
    .then(user => res.status(201).json(user._id))
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
    .populate('user')
    .then(users => res.status(200).json(users))
    .catch(err => console.log(err))
}

function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  User
    .findById(req.params.id)
    .populate('user')
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not found' })
      user.comments.push(req.body)
      return user.save()
    })
    .then(user => res.status(201).json(user))
    .catch(err => res.json(err))
}

function getUserName(req, res){
  console.log(req.params.id)
  User
    .findById(req.params.id)
    .populate('user')

    .then(user => res.status(201).json(user.username))
    .catch(err => res.json(err))
}

function acceptRequest(req, res){
  req.body.user = req.currentUser
  User
    .findById(req.params.id)
    .populate('user')
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not found' })
      user.events.push(req.body.events)
      return user.save()
    })
    .then(user => res.status(201).json(user.events))
    .catch(err => res.json(err))

}

function deleteAcceptedRequest(req, res) {
  req.body.user = req.currentUser
  User
    .findById(req.currentUser._id)
    .then(user => {
      if (!user) return res.status(401).json({ message: 'no users' })
      const request = user.privateMessages.id(req.params.commentId)
      request.request = false
      request.read = true
      user.save()
    })
    .then(user => res.status(200).json(user))
    .catch(err => console.log(err))

}


function attendingUsers(req, res) {
  console.log('attending users', req.params.id)
  User
    .find({ events: req.params.id })
    .then(users => {
      if (!users) return res.status(404).json({ message: 'Not found' })
      res.status(200).json(users)
    })
    .catch(err => console.log(err))
}



function privateMessageCreateRoute(req, res) {
  console.log('pming')
  req.body.user = req.currentUser
  User
    .findById(req.params.id)
    .populate('user')
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not found' })
      console.log(req.body.user)
      user.privateMessages.push(req.body)
      return user.save()
    })
    .then(user => res.status(201).json(user.privateMessages))
    .catch(err => res.json(err))
}

function readPrivateMessage(req, res) {
  req.body.user = req.currentUser
  User
    .findById(req.currentUser._id)
    .then(user => {
      if (!user) return res.status(401).json({ message: 'no users' })
      const request = user.privateMessages.id(req.params.commentId)
      request.read = true
      user.save()
    })
    .then(user => res.status(200).json(user))
    .catch(err => console.log(err))
}



function commentDeleteRoute(req, res) {
  User
    .findById(req.params.id)
    .populate('user')
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not found' })
      const comment = user.comments.id(req.params.commentId)
      comment.remove()
      return user.save()
    })
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}

function getEventCreator(req, res, next) {
  Event
    .findById(req.params.id)
    .populate('user')
    .then(event =>
      User
        .findById(event.user)
        .then(user => res.status(201).json(user))
        .catch(next)

    )

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
  showTheirEvents: showTheirEvents,
  getEventCreator: getEventCreator,
  privateMessageCreateRoute: privateMessageCreateRoute,
  getUserName: getUserName,
  acceptRequest: acceptRequest,
  attendingUsers: attendingUsers,
  getCurrentUser: getCurrentUser,
  deleteAcceptedRequest: deleteAcceptedRequest,
  readPrivateMessage: readPrivateMessage,
  updateProfile: updateProfile,
  updateAvatar: updateAvatar

}
