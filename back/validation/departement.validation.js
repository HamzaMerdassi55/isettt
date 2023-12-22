const isEmpty = require('./isEmpty')
const validator = require('validator')

module.exports = function Validatedepartement (data) {
  const errors = {}
  data.Title = !isEmpty(data.Title) ? data.Title : ''

  if (validator.isEmpty(data.Title)) {
    errors.Title = 'Required departement'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
