const express = require('express')
const { Register, Login } = require('../controllers/users.controller')
const { AddProfile, FindAllProfiles, FindSingleProfile, DeleteProfile, UpdateProfile, MyProfile } = require('../controllers/profile.controller')
const { ROLES, inRole } = require('../security/rolemiddleware')
const passport = require('passport')
const usersModels = require('../models/users.models')
const indexrouter = express.Router()
const DIR = './public/';
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, (new Date().getTime()) + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,
});

indexrouter.post('/register', Register)
indexrouter.post('/login', Login)
indexrouter.post('/profiles',
  passport.authenticate('jwt', { session: false }),
  AddProfile)
/* get all profiles */
indexrouter.get('/profiles',
  passport.authenticate('jwt', { session: false }),
  inRole(ROLES.ADMIN),
  FindAllProfiles)
/* get one profiles */
indexrouter.get('/profile',
  passport.authenticate('jwt', { session: false }),
  FindSingleProfile)
/* delete profiles */
indexrouter.delete('/profiles/:id',
  passport.authenticate('jwt', { session: false }),
  inRole(ROLES.ADMIN),
  DeleteProfile)

  indexrouter.post('/profiles/update',upload.array('files', 1), 
  UpdateProfile)
indexrouter.get('/profiles/me',
  MyProfile)
module.exports = indexrouter
