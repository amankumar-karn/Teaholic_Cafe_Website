import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 

function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const { authTokens } = useContext(AuthContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products/');
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products.');
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    try {
      if (!authTokens) {
        throw new Error('Authorization token not found.');
      }

      const response = await axios.post('http://localhost:8000/api/cart/', {
        product_id: productId,
        quantity: quantity,
      }, {
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Product added to cart:', response.data);
      alert('Product added to cart successfully!');
    } catch (error) {
      console.error('Error adding product to cart:', error.response?.data || error.message);
      alert('Failed to add product to cart.');
    }
  };

  if (error) {
    return <div className="text-center mt-5" style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Menu</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card product-card shadow-sm">
              <img
                src={product.image} // Make sure this URL is a full path
                className="card-img-top"
                alt={product.name}
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <p className="card-text font-weight-bold">₹{product.price}</p>
                <div className="mt-auto">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => handleAddToCart(product.id, 1)}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
