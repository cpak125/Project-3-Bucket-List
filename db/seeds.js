require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true }
)

const { User, Item } = require('./model')

const skydive = new Item({
    completed: false,
    description: 'Go skydiving'
})

const family = new Item({
    completed: false,
    description: 'Have a family with mulitple kids'
})

const europe = new Item({
    completed: false,
    description: 'Travel to Europe'
})

const scuba = new Item({
    completed: false,
    description: 'Go scubadiving'
})

const zipline = new Item({
    completed: false,
    description: 'Ride a zip line'
})

const rafting = new Item({
    completed: false,
    description: 'Go white water rafting'
})

const tom = new User({
    name: 'Tom',
    bucketList: [skydive, family, europe]
})

const dave = new User({
    name: 'Dave',
    bucketList: [zipline, rafting, scuba]
})

User.remove({})
    .then(() => tom.save())
    .then(() => dave.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())