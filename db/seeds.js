require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGODB_URI,
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

const tom = new User({
    name: 'Tom',
    bucketList: [skydive, family, europe]
})

User.remove({})
    .then(() => tom.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())