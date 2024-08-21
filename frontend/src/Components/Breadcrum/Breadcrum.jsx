import React from 'react'
import '../Breadcrum/Breadcrum.css'
import arrow_icon from '../../Frontend_Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
    console.log(product)

  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" />SHOP 
        <img src={arrow_icon} alt="" />
     {product? product.category : 'Category not available'}
        <img src={arrow_icon} alt="" />
        {product? product.name : 'Category not available'}
    </div>
  )
}

export default Breadcrum