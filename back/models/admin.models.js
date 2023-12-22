const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
  Photo: String,
  Nom: String,
  Prénom: String,
  Email: String,
  Password: String
}, { timestamps: true })

module.exports = mongoose.model('admin', adminSchema)