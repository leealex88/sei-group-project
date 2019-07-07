const router = require('express').Router()
const events = require('../controllers/events')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

router.route('/events/')
  .get(events.index)
  .post(secureRoute, events.create)

router.route('/events/:id')
  .get(events.show)

router.route('/events/:id/comments')
  .post(secureRoute, events.commentCreate)

router.route('/events/:id/comments/:commentId')
  .delete(secureRoute, events.commentDelete)

router.route('/users/:id/comments')
  .post(secureRoute, users.userCommentCreate)

router.route('/users/:id/comments/:commentId')
  .delete(secureRoute, users.userCommentDelete)



router.route('/login')
  .post(users.login)

router.route('/register')
  .post(users.register)

router.route('/users')
  .get(users.showUsers)

router.route('/users/:userid')
  .get(users.showUser)






module.exports = router
