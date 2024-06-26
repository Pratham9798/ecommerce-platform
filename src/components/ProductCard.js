import React from 'react';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">${product.price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button onClick={addToCart} className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
