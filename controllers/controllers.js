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
        return res.status(400).json({error:errors.mapped()})
    }
    let {firstName,lastName,email,password,confirm_password}=req.body
    const salt = await bcrypt.genSalt(11)
    const hash = await bcrypt.hash(password,salt)
    try {
        let user = new User({
            firstName,
            lastName,
            email,
            password:hash,
            confirm_password:hash
        })
       await user.save()
       .then(()=>{
           res.status(201).json({title:'User SignUp Form',message:'signUp successfully',error:{}})
       }).catch(e=>{
        console.log('somthing went worng');
       })
    } catch (err) {
        console.log(`user not created${err}`);
        
    }
}
// get signIn controller 
const getSignInController=(req,res,next)=>{
    res.status(200).json({title:'User SignIn Form'})
}

// post signIn controller 
const postSignInController=async(req,res,next)=>{
    const {email,password}=req.body
    const user =await User.findOne({email})
    if(!user){
       return res.status(401).json({message:'Invalid Creandintial!'})
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(401).json({
            message:'Invalid Creadintial!'
        })
    }
    res.status(401).json({
      message: "SingIn successfully",
      title:'User SignIn Form'
    });
}
module.exports={
    getSignUpController,
    postSignUpController,
    getSignInController,
    postSignInController
}