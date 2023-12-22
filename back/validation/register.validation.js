const isEmpty = require('./isEmpty')
const validator = require('validator')

module.exports = function ValidateRegister (data) {
  const errors = {}

  data.nom = !isEmpty(data.nom) ? data.nom : ''
  data.prénom = !isEmpty(data.prénom) ? data.prénom : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.cin = !isEmpty(data.cin) ? data.cin : ''
  data.password = !isEmpty(data.password) ? data.password : ''
  data.telephone = !isEmpty(data.telephone) ? data.telephone : ''
  data.confirm = !isEmpty(data.confirm) ? data.confirm : ''
  if (validator.isEmpty(data.nom)) {
    errors.nom = 'Required nom'
  }
  if (validator.isEmpty(data.prénom)) {
    errors.prénom = 'Required prénom'
  }
  if (!validator.isCin(data.Cin)) {
    errors.email = 'Required format cin'
  }
  if (validator.isEmpty(data.cin)) {
    errors.cin = 'Required cin'
  }
  if (validator.isEmpty(data.email)) {
    errors.email = 'Required email'
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'Required password'
  }
  if (validator.isEmpty(data.telephone)) {
    errors.telephone = 'Required telephone'
  }
  if (!validator.equals(data.password, data.confirm)) {
    errors.confirm = 'Passwords not matches'
  }
  if (validator.isEmpty(data.confirm)) {
    errors.confirm = 'Required confirm'
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
