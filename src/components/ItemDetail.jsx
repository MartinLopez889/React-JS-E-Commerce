import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  return (
    <div>
        <h2>Detalle de: (item.name)</h2>
        <img src={item.image} alt={item.name}/>
        <p>{item.description}</p>
        <p>Precio: {item.price}</p>
        <ItemCount stock={item.stock}/>
    </div>
  )
}

export default ItemDetail