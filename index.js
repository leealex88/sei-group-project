require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const logger = require('./lib/logger')
const router = require('./config/router')
const { dbURI, port } = require('./config/environment')
const errorHandler = require('./lib/errorHandler')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true })

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use('/api', router)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.use(errorHandler)

app.use(logger)

app.listen(port, () => console.log(`App is listening on port ${port}`))

module.exports = app
