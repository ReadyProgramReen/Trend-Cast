const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const connectDB = require('./config/db')
const Product = require('./Models/Product')
const User = require('./Models/User')






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

app.post('/addproduct', async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price
        });

        await product.save();

        console.log('New Product saved');
        res.json({
            success: true,
            name: req.body.name
        });
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

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

// Creating Endpoint for registering the user
app.post('/signup', async(req,res)=>{

    let check = await User.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:'Existing user found with the same email '})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
        
    }
    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password:req.body.password,
        cartData: cart,

    })
    await user.save()
    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data, 'secret_ecom')
    res.json({success:true,token})

})


// Creating Endpoint for user login 

app.post('/login',async (req,res)=>{
    let user = await User.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});

        }
        else{
            res.json({success:false, errors: "Wrong Password"});
        }
    }
    else{
        res.json({success:false, errors: 'Wrong email '})
    }

})

// Creating endpoint for new collection data

app.get('/newcollection', async (req,res)=>{
    let products = await Product.find({});
    let newCollection = products.slice(1).slice(-8);
    console.log('New Collection fetched ')
    res.send(newCollection)
})

// Creating endpoint popular in women 

app.get('/popular',async (req,res)=>{
    let products = await Product.find({category:"women"});
    let popular = products.slice(0,4);
    console.log('Popular products fecthed ')
    res.send(popular);
})



app.listen(port,()=>{
    console.log(`Server running on Port ${port}`)
})
