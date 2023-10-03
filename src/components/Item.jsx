import React from 'react'

function Item ({ id, title, description, price, pictureUrl, }) {
    return (
      <div className="item">
        <img src={pictureUrl} alt={title} />
        <h3>{title}</h3>
        <p>{id}</p>
        <p>{description}</p>
        <p>Precio: ${price}</p>
      </div>
    );
  }

export default Item