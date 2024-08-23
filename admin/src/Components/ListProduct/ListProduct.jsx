import React from 'react'
import '../ListProduct/ListProduct.css'
import { useEffect } from 'react';
import cross_icon from '../../assets/Admin_Assets/cross_icon.png'
import { useState } from 'react';

const ListProduct = () => {

  const [allProducts, setAllProducts] = useState([])

  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)})
  }

  useEffect(()=>{
    fetchInfo()
  },[])

  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className="list-product-formate-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old_Price</p>
        <p>New_Price</p>
        <p>Category</p>
        <p>Remove</p>

      </div>

      <div className="list-product-all-products">
        <hr />
        {allProducts.map((product,index)=>{
            return <>
              <div key={index} className="list-product-formate-main listproduct-formate">
                <img src={product.image} alt="" className="listproduct-product-icon" />
                <p>{product.name}</p>
                <p>{product.old_price}</p>
                <p>{product.new_price}</p>
                <p>{product.category}</p>
                <img className='listproduct-remove-icon' src={cross_icon} alt="" />

            </div>
            <hr />
            </> 
        })}

      </div>
    </div>
  )
}

export default ListProduct