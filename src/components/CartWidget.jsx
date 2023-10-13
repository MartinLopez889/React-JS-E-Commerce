import React from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';

const CartWidget = () => {
  const { cart } = useCartContext();

  return (
    <>
      <span to="/cart" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
        En el carrito: <span className="bg-danger border border-black border-2 rounded">{cart.length}</span>
      </span>
      <Link to="/cart-details">
        <button>
          <BsCartPlus />
          Comprar
        </button>
      </Link>
    </>
  );
};

export default CartWidget;