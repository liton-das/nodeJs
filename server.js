const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',router)

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log('server is running on this port ',PORT);
    
})
