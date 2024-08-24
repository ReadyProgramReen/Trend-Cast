import React, { createContext, useEffect, useState } from "react";
// import all_product from '../Frontend_Assets/all_product'

export const ShopContext = createContext(null);

// shop context provider 

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index]  = 0 ;        
    }
    return cart ;
}


const ShopContextProvider = (props)=>{

    const [all_product, setAllProduct] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data)=>setAllProduct(data))
    },[])

    const addtoCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method: 'POST',
                headers:{
                    Accept:'application/json',
                    "auth-token":`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'itemId':itemId}),
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }

    const removefromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

      // Function to get the total cart amount
      const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                // Find the item in the product list
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    // Calculate the total amount if itemInfo is valid
                    totalAmount += itemInfo.new_price * cartItems[item];
                } else {
                    // Handle the case where itemInfo is not found
                    console.warn(`Item with id ${item} not found in all_product`);
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=> {
        let totalItem = 0 ;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem
    }

    const contextValue = {
        all_product,
         cartItems,
         addtoCart,
         removefromCart,
         getTotalCartAmount,
         getTotalCartItems
        }
    

    return (
        <ShopContext.Provider value ={contextValue}>
            {props.children}    
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;