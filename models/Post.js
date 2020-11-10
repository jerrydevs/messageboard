var mongoose = require('mongoose')
var Schema = mongoose.Schema
var PostSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('post', PostSchema)
