require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})
// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(__dirname + '/client/build/'))

  
const usersController= require('./routes/usersController')
app.use('/api/users', usersController)

const itemsController= require('./routes/itemsController')
app.use('/api/users/:userId/items', itemsController)

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})


module.exports = app
