import React, { useContext } from 'react'
import '../CartItems/CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../../Frontend_Assets/cart_cross_icon.png'

const CartIems = () => {
    
    const {all_product,cartItems,removefromCart,getTotalCartAmount} = useContext(ShopContext)

  return (
    <div className='cartitems'>
    <div className="cart-item-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
    </div>
    <hr />
    {all_product.map((e) => {
        // Only render items if the quantity is greater than 0
        if (cartItems[e.id] > 0) {
            return (
                <div key={e.id}>
                    <div className="cart-items-formate cart-item-format-main">
                        <img className='carticon-product-icon' src={e.image} alt={e.name} />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id]}</p>
                        <img className='cart-items-remove-icon' onClick={() => removefromCart(e.id)} src={remove_icon} alt="Remove" />
                    </div>
                    <hr />
                </div>
            );
        }
        // Explicitly return null if the condition is not met
        return null;
    })}
    <div className="cart-items-down">
    <div className="cart-items-total">
        <h1>Cart Total</h1>
        <div>
            <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <h3>Total </h3>
                <h3>${getTotalCartAmount()}</h3>

            </div>
        </div>
            <button>Proceed to Checkout</button>
    </div>
    <div className="cartItems-promocode">
        <p>If you have a promo code. Enter it here</p>
        <div className="cart-item-promo-box">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
        </div>
    </div>
  </div> 
</div>
);
};
export default CartIems