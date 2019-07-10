const Event = require('../models/event')

//show all events
function indexRoute(req, res) {
  Event
    .find(req.query)
    .populate('user')
    .then(events => res.status(200).json(events))
    .catch(err => console.log(err))
}
//show one event
function showRoute(req, res) {
  Event
    .findById(req.params.id)
    .populate('user')
    .then(event => {
      if (!event) throw new Error('Not Found')
      return res.status(200).json(event)
    })
    .catch(err => console.log(err))
}


//create an event
function eventCreate(req, res) {
  req.body.user = req.currentUser
  Event
    .create(req.body)
    .then(event => res.status(201).json(event))
    .catch(err => console.log(err))

}

//delete event
function deleteRoute(req, res) {
  Event
    .findByIdAndRemove(req.params.id)
    .populate('user')
    .then(() => res.sendStatus(204))
    .catch(err => res.status(404).json(err))
}
//comment
function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  console.log(req.body)
  Event
    .findById(req.params.id)
    .populate('user')
    .then(event => {
      if (!event) return res.status(404).json({ message: 'Not found' })
      event.comments.push(req.body)
      return event.save()
    })
    .then(event => res.status(201).json(event))
    .catch(err => res.json(err))
}


function commentDeleteRoute(req, res) {
  Event
    .findById(req.params.id)
    .populate('user')
    .then(event => {
      if (!event) return res.status(404).json({ message: 'Not found' })
      const comment = event.comments.id(req.params.commentId)
      comment.remove()
      return event.save()
    })
    .then(event => res.status(200).json(event))
    .catch(err => res.json(err))
}







module.exports = {
  index: indexRoute,
  show: showRoute,
  create: eventCreate,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute

}
