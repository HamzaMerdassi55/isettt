const express = require('express')
const { AddDepartement, FindAllDepartement, FindSinglDepartement, UpdateDepartement, DeleteDepartement } = require('../controller/departement.controllers')
const departementrouter = express.Router()

/* add departement */
departementrouter.post('/',  AddDepartement)

/* find all departement */
departementrouter.get('/', FindAllDepartement)

/* find single departement */
departementrouter.get('/:id', FindSinglDepartement)

/* update departement */
departementrouter.put('/:id', UpdateDepartement)

/* delete departement */
departementrouter.delete('/:id', DeleteDepartement)

module.exports = departementrouter