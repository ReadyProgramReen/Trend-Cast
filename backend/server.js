const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const connectDB = require('./config/db')
const Product = require('./Models/Product')





// app config
dotenv.config({path: './config/config.env'})


const app = express();
const port = 4000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); 
app.use(cors()); 

// api creation

app.get('/', (req,res)=>{
    res.send('Express Running')
})

// image storage engine
const storage = multer.diskStorage({
    destination : './upload/images',
    filename: (req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

    }

})

// Endpoints

const upload = multer({storage:storage})

// creating upload endpoint for images
app.use('/images',express.static('upload/images'))

app.post('/upload', upload.single('product'), (req,res)=>{
    res.json({
        success: 1,
        image_url:`http://localhost:${4000}/images/${req.file.filename}`
    })
}) 

// 

app.post('/addproduct', async(req,res)=>{
    const products = await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1
        
    }
    else{
        i = 1;
    }
    const product = await Product.create({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,

    })
    console.log(' New Product saved')
    res.json({
        success: true,
        name:req.body.name
        
    })
    
})

//  Deleting Product 

app.post('/removeproduct', async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log('Removed');
    res.json({
        sucess:true,
        name:req.body.name
    })

})

// get all products to display in frontend 
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log('All products fetched ')
    res.send(products)
})

app.listen(port,()=>{
    console.log(`Server running on Port ${port}`)
})
