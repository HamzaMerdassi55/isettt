const express = require('express')
const { Addetudient, FindAlletudient, FindSingletudient, Updateetudient, Deleteetudient } = require('../controllers/etudient.controller')
const etudientrouter = express.Router()

/* add etudient */
etudientrouter.post('/', Addetudient)

/* find all etudient */
etudientrouter.get('/', FindAlletudient)

/* find single etudient */
etudientrouter.get('/:id', FindSingletudient)

/* update etudient */
etudientrouter.put('/:id', Updateetudient)

/* delete etudient */
etudientrouter.delete('/:id', Deleteetudient)

module.exports = etudientrouter