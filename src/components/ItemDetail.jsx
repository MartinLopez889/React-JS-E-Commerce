import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} del producto ${item.title}`)
  }

  return (
    <div>
        <h2>Detalle de: {item.title}</h2>
        <img src={item.image} alt={item.title}/>
        <p>{item.description}</p>
        <p>Precio: {item.price}</p>
        <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail