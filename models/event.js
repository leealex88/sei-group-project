const mongoose = require('mongoose')

const eventCommentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const eventSchema = new mongoose.Schema({
  eventType: { type: String, required: true },
  eventName: { type: String },
  date: { type: Date, required: true },
  fixedDate: { type: Boolean },
  location: { type: String },
  description: { type: String },
  schedule: { type: String },
  startTime: { type: Number },
  endTime: { type: Number },
  tickets: { type: String },
  ticketLink: { type: String },
  eventLink: { type: String },
  preparation: { type: String },
  cost: { type: Number, default: 0 },
  catered: { type: String },
  provided: { type: String },
  whatToBring: { type: String },
  maxSize: { type: Number },
  minSize: { type: Number },
  idealGroupSize: { type: Number },
  anythingElse: { type: String },
  image: { type: String },
  tags: { type: Array },
  skillLevel: { type: String }
  // comments: [ eventCommentSchema ],
  // user: { type: mongoose.Schema.ObjectId, ref: 'User', default: 'user' }
}, {
  timestamps: true
})

eventSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Event', eventSchema)
