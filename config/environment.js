// const port = process.env.PORT || 4000
// const dbURI = process.env.MONGODB_URI || `mongodb://localhost/project3-${process.env.NODE_ENV || ''}`
// const secret = process.env.SECRET || 'secreto'
//
// module.exports = {
//   port: port,
//   dbURI: dbURI,
//   secret: secret
// }


const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/project3'
const secret = process.env.SECRET || 'secreto'

module.exports = {
  port: port,
  dbURI: dbURI,
  secret: secret
}

//FOR TESTING
// const port = process.env.PORT || 4000
// const dbURI = process.env.MONGODB_URI || `mongodb://localhost/project3-${process.env.NODE_ENV || ''}`
// const secret = process.env.SECRET || 'secreto'
