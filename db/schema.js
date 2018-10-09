const Schema = require('mongoose').Schema

const ItemSchema= new Schema({
    completed: Boolean,
    description: String
})

const UserSchema= new Schema({
    name: String,
    bucketList:[ItemSchema]
})

module.exports = {
    UserSchema,
    ItemSchema
}