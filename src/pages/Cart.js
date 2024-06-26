import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="flex justify-between items-center my-2">
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
