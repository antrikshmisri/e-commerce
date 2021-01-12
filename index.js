const express = require('express')
const path = require('path')
const app = express()

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

const port = 5050
app.listen(5050 , () => {
    console.log(`Listening on Port No. ${port}`)
})
