const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

userSchema
  .virtual('passwordConfirmation')
  .set(function
  setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.plugin(require('mongoose-unique-validator'))

userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password
    delete json.email
    return json
  }
})

userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

userSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
