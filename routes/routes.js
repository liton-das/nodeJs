const { body } = require("express-validator")
const User = require("../model/User")
const { getSignUpController, postSignUpController } = require('../controllers/controllers')
 
let validate=[
    body('firstName')
    .not()
    .isEmpty()
    .withMessage('firstName is required!')
    .isLength({max:20,min:2})
    .trim(),
    body('lastName')
    .not()
    .isEmpty()
    .withMessage('lastName is required!')
    .isLength({max:20,min:2})
    .trim(),
    body('email')
    .not()
    .isEmail()
    .withMessage('please must be provide a valid email!')
    .custom(async value=>{
        const user = await User.findOne({email})
        if(user === value){
            throw new Error('email already in use!')
        }
        return true
    })
    .normalizeEmail(),
    body('password')
    .isLength({min:5})
    .withMessage('password must be greater than 5 character!')
    .trim(),
    body('confirm_password')
    .not()
    .isEmpty()
    .custom(async (value,{req})=>{
        if(value !== req.body.password){
            throw new Error('password & confirm_password doesn\'t match')
        }
        return true
    })
    .trim() 
]
const router = require('express').Router()
// get signUp route
router.get('/signUp',getSignUpController)
//post signUp route 
router.post('/signUp',validate,postSignUpController)

module.exports=router