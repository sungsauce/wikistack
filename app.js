const express = require('express')
const app = express()
const morgan = require('morgan')
const html = require('html-template-tag')
const layout = require('./views/layout')
const {db, Page, User} = require('./models')

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended: false})) // false means we do not accept nested objects

app.get('/', (req, res) => {
    res.send(layout(''))
})

const init = async () => {
    await db.sync({force:true})

    app.listen(3000, () => {
        console.log('Listening')
    })
}

init()

db.authenticate().then(() => {
    console.log(db)
})
