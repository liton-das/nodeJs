const router = require('express').Router()
const { getSignUpController, postSignUpController, getSignInController, getAllProductsController, postSingleProductController, postSignInController, getSingleProduct, updateProductControllerById } = require('../controllers/controllers')
const { validate } = require("../utils/validation")
 
// get all products route
router.get('/products',getAllProductsController)
//get signle Product route
router.get('/product/:id',getSingleProduct)
// post single product route
router.post('/products',postSingleProductController)
// update single product route
router.put('/product/:id',updateProductControllerById)
// delete product route
// router.delete('/product/:id')
















// get signUp route
router.get('/signUp',getSignUpController)
//post signUp route 
router.post('/signUp',validate,postSignUpController)

// get signIn route
router.get('/signIn',getSignInController)
// post signIn route
router.post('/signIn',postSignInController)

module.exports=router