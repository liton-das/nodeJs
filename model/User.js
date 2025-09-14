const { Schema, model } = require("mongoose")


const UserSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxlength:20
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxlength:20
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    confirm_password:{
        type:String,
        required:true,
        trim:true

    }
})
const User= model('User',UserSchema)
module.exports=User