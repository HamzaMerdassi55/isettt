const express = require('express')
const { AddAdmin, FindAllAdmin, FindSinglAdmin, UpdateAdmin, DeleteAdmin } = require('../controller/admin.controllers')
const adminrouter = express.Router()

/* add category */
adminrouter.post('/', AddAdmin)

/* find all category */
adminrouter.get('/', FindAllAdmin)

/* find single category */
adminrouter.get('/:id', FindSinglAdmin)

/* update category */
adminrouter.put('/:id', UpdateAdmin)

/* delete category */
adminrouter.delete('/:id', DeleteAdmin)

module.exports = adminrouter
