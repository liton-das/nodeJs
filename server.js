const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
const { default: mongoose } = require('mongoose')
const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',router)

const PORT = process.env.PORT || 4000
// mongodb+srv://Mern-2404:70240428@cluster0.83ortx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
app.listen(PORT, () => {
  console.log("server is running on this port ", PORT);
  mongoose
    .connect("mongodb+srv://Mern-2404:70240428@cluster0.83ortx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log("Database connected succussfully");
    })
    .catch((err) => {
      console.log("Database not connected!", err);
    });
});
