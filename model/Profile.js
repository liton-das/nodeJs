const {Schema,model}= require('mongoose')

const ProfileSchema = new Schema({
    profile_pic:{
        type: String,
        img:'img.jpg'
    },
    
})

const Profile= model('Profile',ProfileSchema)
module.exports= Profile