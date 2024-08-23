import React from 'react'
import '../AddProduct/AddProduct.css'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'
import { useState } from 'react'

const AddProduct = () => {

    const [image,setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name :'',
        image:'',
        category:'women',
        new_price:'',
        old_price:''
    })

    const imageHandler =(e)=>{
        setImage(e.target.files[0]);


    }

    const changeHandler = (e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product = async ()=>{
        console.log(productDetails);
    }


  return (
    <div className='add-product'>
        <div className="add-product-item-field">
            <p>Product Title </p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Type here' />
        
        <div className="add-product-price">
            <div className="add-product-item-fields">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text"  name='old_price' placeholder='Type here'/>
            </div>
            <div className="add-product-item-fields">
                <p>Offer Price</p>
                <input value={productDetails.new_price}  onChange={changeHandler} type="text"  name='new_price' placeholder='Type here'/>
            </div>
        </div>
        </div>
        <div className="add-product-item-field">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} className='add-product-selector' name="category" >
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>

            </select>
        </div>
        <div className="add-product-item-field">
            <label htmlFor="file-input">
                <img className='add-product-thummbnail-img' src={image?URL.createObjectURL(image) : upload_area} alt="" />
            </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />

        </div>
        <button onClick={()=>{Add_Product()}} className='add-product-btn'>Add</button>

    </div>
  )
}

export default AddProduct