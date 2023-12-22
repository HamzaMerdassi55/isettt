const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  nom: 'string',
  prénom: 'string',
  cin:'string',
  email: {
    type: 'string',
    trim: true,
    unique: true
  },
  Telephone: 'string',
  password: 'string',
  image: String,
  bio: String,
  role: 'string',
  code: String,
},
{
  timestamps: true
})

module.exports = mongoose.model('users', userSchema)
