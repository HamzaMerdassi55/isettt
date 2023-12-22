const isEmpty = require('./isEmpty')
const validator = require('validator')

module.exports = function Validateetudient (data) {
  const errors = {}
  if (validator.isEmpty(
    data.photo, data.Nom, data.Prénom, data.Email,
    data.Cin, data.Departement, data.Telephone)) {
    errors.photo = 'Required Student'
    errors.Nom = 'Required Student'
    errors.Prénom = 'Required Student'
    errors.Email = 'Required Student'
    errors.Cin = 'Required Student'
    errors.Departement = 'Required Student'
    errors.Telephone = 'Required Student'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
