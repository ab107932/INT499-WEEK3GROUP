// src/components/Checkout.js
import React from 'react';
import { getCartItems } from '../utils/cartUtils';
// src/components/Checkout.js
import './Checkout.css';
// rest of the Checkout code...


function Checkout() {
  const cartItems = getCartItems();
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h3>Order Summary</h3>
          {cartItems.map(item => (
            <div key={item.id} className="checkout-item">
              <p>{item.name} - ${item.price} x {item.quantity}</p>
            </div>
          ))}
          <h3>Total: ${getTotal()}</h3>
        </div>
      )}
    </div>
  );
}

export default Checkout;
