import React from 'react'
import ItemCount from './ItemCount'
import { useCartContext } from '../contexts/CartContext'

const ItemDetail = ({item}) => {

  const { addItem } = useCartContext();
  const onAdd = (cantidad) => {
    addItem(item, cantidad);
    console.log(`Compraste ${cantidad} del producto ${item.title}`)
  }

  return (
    <div>
        <h2>Detalle de: {item.title}</h2>
        <img src={item.pictureUrl} alt={item.title}/>
        <p>{item.description}</p>
        <p>Precio: {item.price}</p>
        <p>Stock: {item.stock}</p>
        <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail