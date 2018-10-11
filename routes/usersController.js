const router = require('express').Router()
const { User } = require('../db/model')

//SHOW ALL
router.get('/', async (req, res) => {
    const users = await User.find()
    res.send(users)
})

//SHOW ONE
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    res.send(user)
})

//CREATE
router.post('/', async (req, res) => {
    const user = await User.create(req.body)
    res.send(user)
})

//UPDATE
router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(user)
})

//DELETE
router.delete('/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id)
    res.sendStatus(200)
})


module.exports = router