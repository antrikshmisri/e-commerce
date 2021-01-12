const express = require('express')
const path = require('path')
const app = express()

app.set('views' , path.join(__dirname , 'views'))
app.set('view engine' , 'ejs')

app.get('/home' , (req , res)=>{
    res.render('e-commerce/home')
})

const port = 5050
app.listen(5050 , () => {
    console.log(`Listening on Port No. ${port}`)
})