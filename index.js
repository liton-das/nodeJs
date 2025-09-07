const express= require('express')
const morgan = require("morgan")

const app = express()
app.set('view engine','ejs')

// const MiddleWare=[
//     morgan('dev'),
//     nodemon
// ]
app.use(morgan('dev'))


app.get('/',(req,res)=>{
    res.render('index.ejs',{title:'Home Page'})
})
app.get('/about',(req,res)=>{
    res.render('pages/Aboute.ejs',{title:'About Page',page:'Ruhul'})
})


const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log('iam listing port = ',PORT);
    
})