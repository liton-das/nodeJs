const { validationResult } = require("express-validator")
const { validateFormater } = require("../utils/validateFormater")
const bcrypt = require('bcryptjs')
const User = require("../model/User")

// getSignUp Controller 
const getSignUpController=(req,res)=>{
    res.status(201).json({title:'User SignUp Form',error:{}})
}
// postSigUp Controller 
const postSignUpController= async(req,res,next)=>{
    const errors = validationResult(req).formatWith(validateFormater)
    
    if(!errors.isEmpty()){
        return res.status(404).json({message:'user created successfully',error:errors.mapped()})
    }
    let {firstName,lastName,userEmail,userPassword,confirm_password}=req.body
    const salt = await bcrypt.genSalt(11)
    const hash = await bcrypt.hash(userPassword,salt)
    try {
        let user = new User({
            firstName,
            lastName,
            userEmail,
            userPassword:hash,
            confirm_password:hash
        })
       const createUser = await user.save()
       res.status(201).json({title:'User SignUp Form',createUser,error:{}})
    } catch (err) {
        console.log(`user not created${err}`);
        
    }
}
module.exports={
    getSignUpController,
    postSignUpController
}