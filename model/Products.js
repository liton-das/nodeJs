const { Schema, model } = require("mongoose");

const ProductSchema=new Schema({
    productName:{
        type:String,
        maxlength:20,
        minlength:2,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    discount:{
        type:String
    },
    total:{
        type:String
    },
    stock:{
        type:String,
        required:true
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
    
},{timestamps:true})
const Product=model('Product',ProductSchema)
module.exports=Product