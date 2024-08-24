import React, { useEffect, useState } from 'react'
import '../Popular/Popular.css'
// import data_product from '../../Frontend_Assets/data'
import Item from '../Item/Item'

const Popular = () => {

  const [data_product,setdata_product] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:4000/popular')
      .then((res)=>res.json())
      .then((data)=>setdata_product(data))
  },[])

  return (
    <div className='popular'>
        <h1>Women's Favs </h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price= {item.new_price} old_price={item.old_price}/>

            })}
        </div>
    </div>
  )
}

export default Popular