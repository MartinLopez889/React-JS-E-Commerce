import React from 'react'

const ItemListContainer = (props) => {
    const {greeting, titulo} = props
  return (
    <div className="bg-info">
        <p className="fs-1 fw-bold">{greeting}</p>
        <p className="fs-2 fst-italic">{titulo}</p>

    </div>
  )
}

export default ItemListContainer