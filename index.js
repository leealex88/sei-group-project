const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const logger = require('./lib/logger')
const router = require('./config/router')
const { dbURI, port } = require('./config/environment')
app.use(bodyParser.json())
app.use('/api', router)



const errorHandler = require('./lib/errorHandler')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true })



app.use(errorHandler)

app.use(logger)

app.listen(port, () => console.log(`App is listening on port ${port}`))

module.exports = app
