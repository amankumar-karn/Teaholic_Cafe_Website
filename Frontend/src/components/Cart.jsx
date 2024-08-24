import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/cart/');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);

  const handleRemoveItem = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/api/cart/${productId}/`);
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handlePayment = () => {
    alert('Proceed to payment');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="row">
          {cartItems.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: Rs{product.price}</p>
                  <p className="card-text">Quantity: {product.quantity}</p>
                  <button
                    className="btn btn-danger mt-auto"
                    onClick={() => handleRemoveItem(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="text-center">
          <button className="btn btn-success mt-4" onClick={handlePayment}>
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
