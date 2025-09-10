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

app.listen(PORT, () => {
  console.log("server is running on this port ", PORT);
  mongoose
    .connect("mongodb://127.0.0.1:27017/Mern2404")
    .then(() => {
      console.log("Database connected succussfully");
    })
    .catch((err) => {
      console.log("Database not connected!", err);
    });
});
