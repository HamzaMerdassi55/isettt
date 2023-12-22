const mongoose = require('mongoose')
const Schema = mongoose.Schema

const departementSchema = new Schema({
  Title: String
}, { timestamps: true })

module.exports = mongoose.model('departement', departementSchema)
