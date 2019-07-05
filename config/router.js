const router = require('express').Router()
const events = require('../controllers/events')

router.route('/events')
  .get(events.index)

router.route('/events/:id')
  .get(events.show)

// router.route('/login')
//   .get(events.register)
//
// router.route('/register')
//   .get(events.login)




module.exports = router
