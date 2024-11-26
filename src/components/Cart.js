// src/components/Cart.js
import React, { useState, useEffect } from 'react';
import { removeFromCart, updateCartQuantity, getCartItems } from '../utils/cartUtils';
// src/components/Cart.js
import './Cart.css';
// rest of the Cart code...

function Cart() {
  const [cartItems, setCartItems] = useState(getCartItems());

  const handleRemove = (id) => {
    removeFromCart(id);
    setCartItems(getCartItems());
  };

  const handleQuantityChange = (id, quantity) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${getTotal()}</h3>
    </div>
  );
}

export default Cart;
