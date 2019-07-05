const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { dbURI, port } = require('./config/environment')
const app = express()
const logger = require('./lib/logger')

const errorHandler = require('./lib/errorHandler')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true })

app.use(bodyParser.json())

app.use(errorHandler)

app.use(logger)

app.listen(port, () => console.log(`App is listening on port ${port}`))

module.exports = app
