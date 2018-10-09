const router = require('express').Router()
const { User } = require('../db/model')

router.get('/', async (req, res) => {
    const users = await User.find()
    res.send(users)
})



module.exports=router