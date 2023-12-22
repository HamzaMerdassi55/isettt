const etudient = require('../models/etudient.models')
const Validateetudient = require('../validation/etudient.validation')

const Addetudient = async (req, res) => {
  try {
    await etudient.findOne({ Nom: req.body.Nom }).then(async (exist) => {
      if (exist) {
        const errors = {}
        errors.Name = 'etudient Exist'
        res.status(404).json(errors)
      } else {
        await etudient.create(req.body)
        res.status(201).json({ message: 'etudient ajouter' })
      }
    })
  } catch (error) {
    console.log(error.message)
  }
}

const FindAlletudient = async (req, res) => {
  try {
    const data = await etudient.find()
    res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}

const FindSingletudient = async (req, res) => {
  try {
    const data = await etudient.findOne({ _id: req.params.id })
    res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}

const Updateetudient = async (req, res) => {
  const { errors, isValid } = Validateetudient(req.body)
  try {
    if (!isValid) {
      res.status(404).json(errors)
    } else {
      const data = await etudient.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      )
      res.status(201).json(data)
    }
  } catch (error) {
    console.log(error.message)
  }
}

const Deleteetudient = async (req, res) => {
  try {
    await etudient.findOneAndRemove({ _id: req.params.id })
    res.status(201).json({ message: 'etudient supprimer' })
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  Addetudient,
  FindAlletudient,
  FindSingletudient,
  Updateetudient,
  Deleteetudient
}
