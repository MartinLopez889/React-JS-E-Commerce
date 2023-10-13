import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useCartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {

  const { addItem } = useCartContext();
  const [requestedItems, setRequestedItems] = useState(0);

  const onAdd = (cantidad) => {
    setRequestedItems(cantidad);
    addItem(item, cantidad);
    console.log(`Compraste ${cantidad} del producto ${item.title}`);
  };

  return (
    <div>
      <h2>Detalle de: {item.title}</h2>
      <img src={item.pictureUrl} alt={item.title} />
      <p>{item.description}</p>
      <p>Precio: {item.price}</p>
      <p>Stock: {item.stock}</p>
      <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
      {requestedItems > 0 && (
        <Link to="/cart">
          <button>Terminar mi compra</button>
        </Link>
      )}
    </div>
  )
}

export default ItemDetail