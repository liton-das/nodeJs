const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
const dotenv = require('dotenv')
const dbConnect = require('./config/db.js')
dotenv.config()
const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',router)

const port = process.env.PORT || 4000
// mongodb+srv://Mern-2404:70240428@cluster0.83ortx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
app.listen(port, () => {
  dbConnect()
  console.log("server is running on this port ", port);
});
