const router = require('express').Router()
const events = require('../controllers/events')

const users = require('../controllers/users')

router.route('/events')
  .get(events.index)

router.route('/events/:id')
  .get(events.show)

router.route('/login')
  .get(users.login)

router.route('/register')
  .get(users.register)
router.route('/event/new')
  .get(events.new)




module.exports = router
