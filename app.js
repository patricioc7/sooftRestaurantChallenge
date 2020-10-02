const express = require('express')
const path = require('path')
const api = require('./api/app')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// API
app.use('', api)

module.exports = app
