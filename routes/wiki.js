const express = require('express')
const router = express.Router()
const addPage = require('../views/addPage')

router.get('/', (req, res) => {
    console.log('inside /wiki')
})

router.post('/', (req, res) => {
    // res.redirect('/add')
    res.json(req.body)
})

router.get('/add', (req, res) => {
    res.send(addPage())
})


module.exports = router