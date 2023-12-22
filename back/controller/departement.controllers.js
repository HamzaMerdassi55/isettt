const departement = require('../models/departement');
const Validatedepartement = require('../validation/departement.validation')

const AddDepartment = async (req, res) => {
  const { errors, isValid } = Validatedepartement(req.body)
  try {
    if (!isValid) {
      res.status(404).json(errors)
    } else {
      await departement.findOne({ Title: req.body.Title }).then(async (exist) => {
        if (exist) {
          errors.Title = 'departement Exist'
          res.status(404).json(errors)
        } else {
          await departement.create(req.body)
          res.status(201).json({ message: 'departement added with success' })
        }
      })
    }
  } catch (error) {
    console.log(error.message)
  }
}

const FindAllDepartement = async (req, res) => {
  try {
    const data = await departement.find()
    res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}

const FindSinglDepartement = async (req, res) => {
  try {
    const data = await departement.findOne({ _id: req.params.id })
    res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}

const UpdateDepartement = async (req, res) => {
  const { errors, isValid } = Validatedepartement(req.body)
  try {
    if (!isValid) {
      res.status(404).json(errors)
    } else {
      const data = await departement.findOneAndUpdate(
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

const DeleteDepartement = async (req, res) => {
  try {
    await departement.findOneAndRemove({ _id: req.params.id })
    res.status(201).json({ message: 'departement deleted' })
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  AddDepartment,
  FindAllDepartement,
  FindSinglDepartement,
  UpdateDepartement,
  DeleteDepartement
}
