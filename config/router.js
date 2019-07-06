const router = require('express').Router()
const events = require('../controllers/events')

const users = require('../controllers/auth')

router.route('/events')
  .get(events.index)

router.route('/events/:id')
  .get(events.show)

router.route('/login')
  .get(users.login)

router.route('/register')
  .get(users.register)




module.exports = router
