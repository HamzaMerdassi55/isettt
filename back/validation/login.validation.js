const isEmpty = require('./isEmpty')
const validator = require('validator')

module.exports = function ValidateLogin (data) {
  const errors = {}

  data.cin = !isEmpty(data.cin) ? data.cin : ''
  data.password = !isEmpty(data.password) ? data.password : ''

  if (!validator.isCin(data.cin)) {
    errors.cin = 'Required Cin'
  }
  if (validator.isEmpty(data.cin)) {
    errors.cin = 'Required cin'
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'Required password'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
