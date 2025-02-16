import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/Frontend_Assets/cart_cross_icon.png';
// import all_product from '../components/assets/Frontend_Assets/all_product'

const CartItems = () => {
  const { getTotalCartAmount ,all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}> {/* Ensure a unique key for each item */}
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove item"
                  className="remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;  // Return null if condition is not met
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>CART TOTALS</h1>
          <div>
            <div className="cartitems-total-items">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promo-code">
          <p>If you have a promo-code, ENTER it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder = 'promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
