const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/products')
mongoose.connect('mongodb://localhost:27017/e-products',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const db = mongoose.connection;
db.on("error" , console.error.bind(console , "Connection error: "));
db.once("open" , ()=>{
    console.log("connection established")
})

app.use(express.static(__dirname + '/public'));
app.use('/styles', express.static(__dirname + '/public'));
app.set('views' , path.join(__dirname , 'views'))
app.set('view engine' , 'ejs')

app.get('/home' , (req , res)=>{
    res.render('e-commerce/home')
})

app.get('/signup' , (req , res)=>{
    res.render('e-commerce/signup')
})
app.get('/signin' , (req , res)=>{
    res.render('e-commerce/signin')
})

app.get('/products' , async (req , res)=>{
    const allproducts = await Product.find({})
    res.render('e-commerce/products' , {allproducts})
})

const port = 5050
app.listen(5050 , () => {
    console.log(`Listening on Port No. ${port}`)
})
