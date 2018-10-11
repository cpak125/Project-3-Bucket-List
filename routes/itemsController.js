const router = require('express').Router({ mergeParams: true })
const { User, Item } = require('../db/model')

//SHOW ALL
router.get('/', async (req, res) => {
    const user = await User.findById(req.params.userId)
    const items = user.bucketList
    res.send(items)
  })

  //CREATE
  router.post('/', (req, res) => {
    const newIdea = new Idea()

    User.findById(req.params.userId)
        .then((user) => {
            user.ideas.push(newIdea)
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
            //HELP
            return user.update({ $pull: { ideas: { _id: req.params.id } } })
        })
        .then(user => {
            res.send(user)
        })
})



  module.exports = router