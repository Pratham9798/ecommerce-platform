import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/products" className="mr-4">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default NavigationMenu;
