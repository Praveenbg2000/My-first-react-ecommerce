import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : null}
      {cart.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
