const router = require('express').Router()
const events = require('../controllers/events')

const users = require('../controllers/users')

router.route('/events/')
  .get(events.index)
  .post(events.create)

router.route('/events/:id')
  .get(events.show)

router.route('/login')
  .post(users.login)

router.route('/register')
  .post(users.register)

router.route('/users')
  .get(users.showUsers)

router.route('/users/:userid')
  .get(users.showUser)






module.exports = router
