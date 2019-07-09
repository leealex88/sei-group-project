const port = process.env.PORT || 4000
const env = process.env.NODE_ENV || 'development'
const dbURI = env === 'production' ? process.env.MONGODB_URI : `${process.env.MONGODB_URI}-${env}`
const secret = process.env.SECRET || 'secreto'

module.exports = {
  env: env,
  port: port,
  dbURI: dbURI,
  secret: secret
}
