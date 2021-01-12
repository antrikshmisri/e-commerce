const express = require('express')
const app = express()

app.get('/' , (req , res)=>{
    res.send('This is home page')
})

const port = 5050
app.listen(5050 , () => {
    console.log(`Listening on Port No. ${port}`)
})