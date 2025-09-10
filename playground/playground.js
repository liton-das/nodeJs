const validateRoute = require('express').Router()
const { check, validationResult } = require('express-validator')
const User = require('../model/User')


validateRoute.get('/playground',(req,res,next)=>{
    res.send('i am playground route')

})
validateRoute.post('/playground',
    [
        check('firstName')
        .not()
        .isEmpty()
        .withMessage('firstName is required!')
        .trim(),
        check('lastName')
        .not()
        .isEmpty()
        .withMessage('lastName is required!')
        .trim(),
        check('email')
        .not()
        .custom(async value=>{
            const user = await User.findOne({email})
            if(user !== value){
                Promise.reject('E-mail already in use!')
            }
            return true
        })
        .isEmail()
        .withMessage('email is required!')
        .normalizeEmail(),
        check('password')
        .custom(value=>{
            if(value.length < 5){
                throw new Error('Password must be greater than 5 character!')
            }
            return true
        }),
        check('confirm_password')
        .custom((value,{req})=>{
            if(value!== req.body.password){
                throw new Error('Password & Confirm_password doesn\'t match!')
            }
            return true
        })
        
    ],
    
    (req,res,next)=>{
        const errors = validationResult(req)
    const myFormater= err => err.msg
    console.log(errors.formatWith(myFormater).mapped());
    

})




module.exports = validateRoute