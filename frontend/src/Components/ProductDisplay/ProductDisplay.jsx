import React from 'react'
import '../ProductDisplay/ProductDisplay.css'
import star_icon from '../../Frontend_Assets/star_icon.png'
import star_dull_icon from '../../Frontend_Assets/star_dull_icon.png'


const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='product-display'> 
    <div className="product-display-left">
        <div className="product-display-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />


        </div>

        <div className="product-display-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
    </div>

    <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(124)</p>

        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-old">${product.old_price}</div>
            <div className="productdisplay-right-new">${product.new_price}</div>
        </div>

        <div className="productdisplay-right-description">
            <p>Classic White Button-Down Shirt, a timeless staple designed for both comfort and style. Crafted from premium, breathable cotton, this shirt offers a soft feel and all-day wearability. </p>

        </div>
        <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <div className="product-display-right-sizes">
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
                <p>XXL</p>

            </div>

        </div>

        <button>ADD TO CART</button>
        <p className='product-display-right-category'> <span>Category:</span>Women , T-shirt , Crop top </p>
        <p className='product-display-right-category'> <span>Tags:</span>Modern , latest </p>

    </div>

    </div>
  )
}

export default ProductDisplay