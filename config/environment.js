const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/project3'
const secret = process.env.SECRET || 'secreto'

module.exports = {
  port: port,
  dbURI: dbURI,
  secret: secret
}
