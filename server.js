const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.json({title:'hello react '})
})

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log('server is running on this port ',PORT);
    
})
