const express = require('express')
const router = express.Router({ mergeParams: true })
const { User, Item } = require('../db/model')

//SHOW ALL
router.get('/', async (req, res) => {
    const user = await User.findById(req.params.userId)
    const items = user.bucketList
    res.send(items)
})

//CREATE
router.post('/', (req, res) => {
    const newItem = new Item(req.body)

    User.findById(req.params.userId)
        .then((user) => {
            user.bucketList.push(newItem)
            return user.save()
        })
        .then((user) => {
            res.send(user)
        })
})

//DELETE
router.delete('/:id', (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            return user.update({ $pull: { items: { _id: req.params.id } } })
        })
        .then(user => {
            res.send(user)
        })
})



module.exports = router