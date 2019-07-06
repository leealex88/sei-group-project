const router = require('express').Router()
const events = require('../controllers/events')

<<<<<<< HEAD
const users = require('../controllers/users')
=======
const users = require('../controllers/auth')
>>>>>>> development

router.route('/events')
  .get(events.index)

router.route('/events/:id')
  .get(events.show)

router.route('/login')
<<<<<<< HEAD
  .post(users.login)

router.route('/register')
  .post(users.register)

router.route('/users')
  .get(users.showUsers)

router.route('/users/:userid')
  .get(users.showUser)


=======
  .get(users.login)

router.route('/register')
  .get(users.register)
>>>>>>> development




module.exports = router
