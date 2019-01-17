const express = require('express')
const app = express()
const morgan = require('morgan')
const html = require('html-template-tag')
const layout = require('./views/layout')
const {db, Page, User} = require('./models') // why does requiring the directory "models" work? why don't we need to specify the "index" file?
// const db = require('./models').default
// const db = require('./models')

const userRouter = require('./routes/user')
const wikiRouter = require('./routes/wiki')

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false})) // false means we do not accept nested objects

// Redirect directions
app.use('/user', userRouter)
app.use('/wiki', wikiRouter)

app.get('/', (req, res) => {
    res.redirect('/wiki')
})

app.get('/', (req, res, next) => {
    res.send(layout(''))
    next()
})


const init = async () => {
    await db.sync({force:true})
    app.listen(3000, () => {
        console.log('Listening')
    })
}
init()

// checks if connected to database
db.authenticate().then(() => {
    console.log('Connected to db')
})
