import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Récupérer les données du panier depuis l'API
    axios.get('/api/cart')
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <span>{item.product.name}</span> {/* Afficher le nom du produit associé */}
              <span>Quantity: {item.quantity}</span>
              <span>Price: ${item.product.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
