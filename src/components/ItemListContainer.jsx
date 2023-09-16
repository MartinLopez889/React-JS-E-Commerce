import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
  const { greeting, titulo } = props
  return (
    <div className="bg-info">
      <p className="fs-1 fw-bold">{greeting}</p>
      <p className="fs-2 fst-italic">{titulo}</p>
      <ItemCount stock={5} onAdd={(cantidad) => console.log(`Agregado al carrito: ${cantidad}`)} />

    </div>
  )
}

export default ItemListContainer