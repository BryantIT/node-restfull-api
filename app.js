const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv/config')

//ROUTES
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/posts', (req, res) => {
  res.send('Hello posts')
})

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true  },
   () => console.log('connected to DB')
)


app.listen(3000)
