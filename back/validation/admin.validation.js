const isEmpty = require('./isEmpty')
const validator = require('validator')

module.exports = function Validateadmin (data) {
  const errors = {}
  data.Photo = !isEmpty(data.Photo) ? data.Photo : ''
  data.Nom = !isEmpty(data.Nom) ? data.Nom : ''
  data.Prénom = !isEmpty(data.Prénom) ? data.Prénom : ''
  data.Email = !isEmpty(data.Email) ? data.Email : ''
  data.Password = !isEmpty(data.Password) ? data.Password : ''

  if (validator.isEmpty(data.Photo)) {
    errors.Photo = 'Required photo'
  }
  if (validator.isEmpty(data.Nom)) {
    errors.Nom = 'Required Nom'
  }
  if (validator.isEmpty(data.Prénom)) {
    errors.Prénom = 'Required Prénom'
  }
  if (validator.isEmpty(data.Email)) {
    errors.Email = 'Required Email'
  }
  if (validator.isEmpty(data.Password)) {
    errors.Password = 'Required Password'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
