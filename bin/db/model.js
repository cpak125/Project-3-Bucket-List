const mongoose = require('mongoose')
const { UserSchema, ItemSchema } = require('./schema')

const UserModel= mongoose.model('User', UserSchema)
const ItemModel= mongoose.model('Item', ItemSchema)

module.exports={
    User: UserModel,
    Item: ItemModel
}