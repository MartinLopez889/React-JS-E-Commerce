import React, { useState, useEffect } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';

const CartWidget = () => {
  const { cart } = useCartContext();
  const [mostrar, setMostrar] = useState(true);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (cart.length === 0) {
      setMostrar(false);
      setTotalItems(0);
    } else {
      setMostrar(true);
      const total = cart.reduce((total, item) => total + item.quantity, 0);
      setTotalItems(total);
    }
  }, [cart]);

  if (!mostrar) {
    return null;
  }

  return (
    <>
      <Link to="/cart" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
        En el carrito: <span className="bg-danger border border-black border-2 rounded">{totalItems}</span>
      </Link>
      <Link to="/cart">
        <button>
          <BsCartPlus />
          Comprar
        </button>
      </Link>
    </>
  );
};

export default CartWidget;