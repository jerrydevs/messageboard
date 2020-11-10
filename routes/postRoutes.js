const express = require('express')
const Router = express.Router()

const Post = require('../models/Post')

Router.post('/', async (req, res) => {
  try {
    const { username, message } = req.body

    const post = new Post({
      username,
      message,
    })
    await post.save()
    res.status(200).send(post)
  } catch (error) {
    console.error(error)
  }
})

Router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).send(posts)
  } catch (error) {
    console.error(error)
  }
})

module.exports = Router
