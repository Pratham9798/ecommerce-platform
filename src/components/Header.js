import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">E-Shop</Link>
      <nav>
        <Link to="/products" className="mx-2">Products</Link>
        <Link to="/cart" className="mx-2">Cart ({cart.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
