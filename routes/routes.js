const { getSignUpController } = require('../controllers/controllers')

const router = require('express').Router()
// get signUp route
router.get('/signUp',getSignUpController)
//post signUp route 

module.exports=router