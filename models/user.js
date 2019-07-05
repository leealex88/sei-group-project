const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')

const userCommentSchema = new mongoose.Schema({
  text: { type: String, require: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String },
  comments: [ userCommentSchema ],
  createdEvents: { type: mongoose.Schema.ObjectId },
  attendedEvents: { type: mongoose.Schema.ObjectId },
  createdComments: { type: mongoose.Schema.ObjectId }


})


userSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('User', userSchema)
