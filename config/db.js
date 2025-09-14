const { default: mongoose } = require("mongoose")

const dbConnect=async()=>{
    try {
        await mongoose.connect("mongodb+srv://Mern-2404:70240428@cluster0.83ortx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('db connected successfully');
        
    } catch (error) {
        console.log('db not connected',error);
        
    }
}

module.exports=dbConnect