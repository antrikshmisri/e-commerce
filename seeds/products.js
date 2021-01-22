const axios = require('axios')
const Product = require('../models/products')
const mongoose = require('mongoose')
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
async function getProducts()
{
    await Product.deleteMany({})
    let productData = await axios.get('https://fakestoreapi.com/products')
    productsarr = productData.data
    return productsarr
}

let data = []
getProducts()
.then(res => {
    data = res
    for(let product of data)
    {
        Product.create({
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image
        }).then(res =>{
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    // db.close()
})
.catch(err => {
    console.log(err)
    // db.close()
})
