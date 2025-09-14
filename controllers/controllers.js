const { validationResult } = require("express-validator")
const { validateFormater } = require("../utils/validateFormater")
const bcrypt = require('bcryptjs')
const User = require("../model/User")
const Product = require("../model/Products")

// get product controller 
const getAllProductsController=(req,res)=>{
    res.status(200).json({message:'All Products'})
}
// get singleProduct controller 
const getSingleProduct = async (req,res)=>{
    const {id} = req.params
    const product = await Product.findById({_id:id})
    res.status(200).json({message:'single Product',product})
}
// post product controller
const postSingleProductController=async(req,res)=>{
    const {productName,price,discount,total,stock} = req.body
    if(!productName || !price){
        return res.status(400).json({message:'Product name and Price are required!'})
    }
    const products=new Product({
        productName,
        price,
        discount,
        total,
        stock
    })
    await products.save()
    .then(()=>{
        res.status(201).json({message:'product created successfully',data:products})
        
    }).catch(err=>{
        console.log('product not created',err);
        return res.status(500).json({message:'Internal Server Error',error:err.message})
    })
}
// edit product controller
const updateProductControllerById=async(req,res)=>{
    const {productName,price,discount,total,stock} = req.body
    const {id} = req.params
    if(!productName && !price && !discount && !total && !stock){
        return res.status(400).json({messagea:'At least one field is required to update!'})
    }
    try {
      const product = await Product.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            productName,
            price,
            discount,
            total,
            stock,
          },
        },
        {
          new: true,
        }
      );
    //   if product not found
    if(!product){
        return res.status(400).json({message:'Product not found!'})
    }
      return res.status(200).json({message:'product updated successfully',product})
    } catch (error) {
        console.log('Error Updating product',error);
        return res.status(500).json({message:'Internal Server Error',err:error.message})
    }
     
}
// delete product controller





















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
const getSignInController=async(req,res,next)=>{
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
    getSingleProduct,
    getAllProductsController,
    postSingleProductController,
    updateProductControllerById,
    getSignUpController,
    postSignUpController,
    getSignInController,
    postSignInController
}