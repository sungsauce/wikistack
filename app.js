const express = require('express')
const app = express()
const morgan = require('morgan')
const html = require('html-template-tag')
const layout = require('./views/layout')

// app.use('/', require('./views/index'))

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended: false})) // false means we do not accept nested objects

app.get('/', (req, res) => {
    // res.send('hello')
    res.send(layout(''))
})

app.listen(3000, () => {
    console.log('Listening')
})
