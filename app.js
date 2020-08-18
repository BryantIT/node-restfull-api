const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv/config')

const postsRoutes = require('./routes/posts')
app.use('/posts', postsRoutes)

app.get('/', (req, res) => {
  res.send('Hello world')
})

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true  },
   () => console.log('connected to DB')
)


app.listen(3000)
