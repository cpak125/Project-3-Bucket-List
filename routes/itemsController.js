const router = require('express').Router({ mergeParams: true })
const { User, Item } = require('../db/model')

//SHOW ALL
router.get('/', async (req, res) => {
    const user = await User.findById(req.params.userId)
    const items = user.bucketList
    res.send(items)
  })

  module.exports = router