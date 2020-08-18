const express = require('express')

const app = express()

//ROUTES
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/posts', (req, res) => {
  res.send('Hello posts')
})

app.listen(3000)
