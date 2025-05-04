import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

const Home = () => {
  return (
    <div>
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
