
import React, { useState, useEffect } from 'react';
import { subscriptionItems } from '../Data';  // Import the subscription data
import { addToCart, getCartItems } from '../utils/cartUtils';
import './Subscription.css';
// src/components/Subscription.js

function Subscription() {
  const [cartItems, setCartItems] = useState(getCartItems());
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    // Check if the user has already added a subscription item to the cart
    const subscriptionInCart = cartItems.some(item => item.price > 0);
    setWarning(subscriptionInCart);
  }, [cartItems]);

  const handleAddToCart = (item) => {
    // Prevent adding more than one subscription item
    if (warning) {
      return;
    }

    // Add subscription to cart
    addToCart(item);
    setCartItems(getCartItems()); // Update the cart display

    // Set warning if the user adds a subscription item
    setWarning(true);
  };

  return (
    <div className="subscription">
      <h2>Choose Your Subscription</h2>
      {warning && <p className="warning">You can only add one subscription at a time.</p>}

      <div className="subscription-items">
        {subscriptionItems.map(item => (
          <div key={item.id} className="subscription-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button 
              onClick={() => handleAddToCart(item)} 
              disabled={warning}
            >
              {warning ? 'Already Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subscription;
