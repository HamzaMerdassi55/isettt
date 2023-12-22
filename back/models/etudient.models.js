const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
  photo: String,
  Nom: String,
  Prénom: String,
  Cin: String,
  Email: String,
  Niveau : String,
  Departement: String,
  Telephone: String,
}, { timestamps: true })

module.exports = mongoose.model('student', studentSchema)
