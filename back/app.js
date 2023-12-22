const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const passport = require('passport')
const multer = require('multer')
const app = express()

const adminrouter=require('./routes/admin.route')
const departementrouter = require('./routes/departement.route')
const etudientrouter = require('./routes/etudient.route')
const indexrouter = require('./routes/index.route')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use('/admin', adminrouter)
app.use('/departement', departementrouter)
app.use('/etudient', etudientrouter)
app.use('/api', indexrouter)
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use('/public/:filename', (req, res) => {
    const { filename } = req.params
    return res.status(200).sendFile(path.join(__dirname, 'public', filename))
})

// upload image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name)
    }
})

const upload = multer({ storage: storage })

app.post('/api/uploads', upload.single('file'), (req, res) => {
    res.status(200).json('image uploaded')
})
// passport
app.use(passport.initialize())
require('./security/passport')(passport)
mongoose.connect(process.env.MONGO_URI)
  .then(() =>
    console.log('DB Connected'))
  .catch((err) => {
    console.log(err)
  })

module.exports = app
