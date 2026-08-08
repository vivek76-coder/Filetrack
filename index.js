const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')
mongoose.connect(process.env.DB)
const getEndpoint = (endpoint)=>{
    const root = process.cwd()
    return path.join(root , "view", endpoint)
}

const express = require('express')
const cors = require("cors")
const path = require("path")
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
app.use(cors({
    origin: "http:127.0.0.1:5500"
}))
// UI Endpoint
app.get('/', (req, res)=>{
    res.sendFile(getEndpoint("index.html"))
})

app.get('/login', (req, res)=>{
    res.sendFile(getEndpoint("index.html"))
})

app.get('/signup', (req, res)=>{
    res.sendFile(getEndpoint("signup.html"))
})

app.get('/dashboard', (req, res)=>{
    res.sendFile(getEndpoint("app/dashboard.html"))
})
// Api Endopoint
app.post('/api/signup', signup)
app.post('/api/login', login)
app.post('/api/file', upload.single('file'), createFile)
app.get('/api/file', fetchFile)


