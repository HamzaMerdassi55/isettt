const admins = require('../models/admin.models')
const Validateadmin = require('../validation/admin.validation')

const AddAdmin = async (req, res) => {
  const { errors, isValid } = Validateadmin(req.body)
  try {
    if (!isValid) {
      res.status(404).json(errors)
    } else {
      await admins.findOne({ Email: req.body.Email }).then(async (exist) => {
        if (exist) {
          errors.Email = 'Admin Exist'
          res.status(404).json(errors)
        } else {
          await admins.create(req.body)
          res.status(201).json({ message: 'Admin added with success' })
        }
      })
    }
  } catch (error) {
    console.log(error.message)
  }
}

const FindAllAdmin = async (req, res) => {
  try {
    const data = await admins.find()
    res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}

const FindSinglAdmin = async (req, res) => {
  try {
    const data = await admins.findOne({ _id: req.params.id })
    res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}

const UpdateAdmin = async (req, res) => {
  const { errors, isValid } = Validateadmin(req.body)
  try {
    if (!isValid) {
      res.status(404).json(errors)
    } else {
      const data = await admins.findOneAndUpdate(
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

const DeleteAdmin = async (req, res) => {
  try {
    await admins.findOneAndRemove({ _id: req.params.id })
    res.status(201).json({ message: 'admin deleted' })
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  AddAdmin,
  FindAllAdmin,
  FindSinglAdmin,
  UpdateAdmin,
  DeleteAdmin
}
