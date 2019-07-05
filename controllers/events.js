const Event = require('../models/events')

function indexRoute(req, res) {
  console.log(req)
  Event
    .find(req.query)
    .then(events => res.status(200).json(events))
    .catch(err => console.log(err))
}


module.exports = {
  index: indexRoute
}
