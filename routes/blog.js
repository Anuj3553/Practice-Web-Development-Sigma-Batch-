const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Blog page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})

// define the slug route
router.get('/post/:slug', (req, res) => {
  res.send(`fetch the blog post for ${req.params.slug}`)
})

module.exports = router