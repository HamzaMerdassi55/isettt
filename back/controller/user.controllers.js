const users = require('../models/user.models')
const ValidateRegister = require('../validation/register.validation')
const ValidateLogin = require('../validation/login.validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Register = async (req, res) => {
  const { errors, isValid } = ValidateRegister(req.body)
  try {
    if (!isValid) {
      res.status(404).json(errors)
    } else {
      users.findOne({ cin: req.body.cin }).then(async (exist) => {
        if (exist) {
          errors.cin = 'user exist'
          res.status(404).json(errors)
        } else {
          const hash = bcrypt.hashSync(req.body.password, 8) // hashed password
          req.body.password = hash
          req.body.role = 'USER'
          const user = await users.create(req.body)
          res.status(200).json({ message: 'success', user })
        }
      })
    }
  } catch (error) {
    res.status(404).json(error.message)
  }
}

const Login = async (req, res) => {
  const { errors, isValid } = ValidateLogin(req.body)
  try {
    if (!isValid) {
      res.status(404).json(errors)
    } else {
      users.findOne({ cin: req.body.cin })
        .then(user => {
          if (!user) {
            errors.cin = 'not found user'
            res.status(404).json(errors)
          } else {
            bcrypt.compare(req.body.password, user.password)
              .then(isMatch => {
                console.log(req.body.password)
                if (!isMatch) {
                  errors.password = 'incorrect password'
                  res.status(404).json(errors)
                } else {
                  const token = jwt.sign({
                    id: user._id,
                    cin: user.cin,
                    email: user.email,
                    role: user.role
                  }, process.env.PRIVATE_KEY, { expiresIn: '7d' })
                  res.status(200).json({
                    token: 'Bearer ' + token,
                    user
                  })
                }
              })
          }
        })
    }
  } catch (error) {
    res.status(404).json(error.message)
  }
}




module.exports = {
  Register,
  Login,
}
