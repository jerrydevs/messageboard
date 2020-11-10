require('dotenv').config()
var express = require('express')
var cors = require('cors')

var connectToDB = require('./db')

var app = express()

connectToDB()

app.use(cors())
app.use(express.json())

app.use('/', require('./routes/postRoutes'))

const PORT = process.env.PORT || '5000'
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`)
})

module.exports = app
