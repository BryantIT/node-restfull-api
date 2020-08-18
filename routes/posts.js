const express = require('express')
const router = express.Router()

//ROUTES


router.get('/posts', (req, res) => {
  res.send('Hello posts')
})

module.exports = router
