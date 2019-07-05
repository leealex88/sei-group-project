const router = require('express').Router()
const events = require('../controllers/dinosaurs')

router.route('/events')
  .get(events.index)




module.exports = router
