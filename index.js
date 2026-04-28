const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')
mongoose.connect(process.env.DB)

const express = require('express')
const morgan = require('morgan')
const {v4: uniqueId} = require('uuid')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, next)=>{
        next(null,'files/')
    },
    filename: (req, file, next)=>{
        const extension = file.originalname.split('.').pop()
        const name = `${uniqueId()}.${extension}`
        next(null, name)
    }
})
const upload = multer({storage: storage})

const { signup, login } = require('./controller/user.controller.js')
const { createFile, fetchFile } = require('./controller/file.controller.js')
const app = express()
app.listen(process.env.PORT || 8080)

app.use(express.static('view'))
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/signup', signup)
app.post('/login', login)
app.post('/file', upload.single('file'), createFile)

app.get('/file', fetchFile)


