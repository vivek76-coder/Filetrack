const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')
mongoose.connect(process.env.DB)

const express = require('express')
const morgan = require('morgan')
const { singup, login } = require('./controller/user.controller.js')
const { createFile } = require('./controller/file.controller.js')
const app = express()
app.listen(process.env.PORT || 8080)

app.use(express.static('view'))
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/signup', singup)
app.post('/login', login)
app.post('/file', createFile)
