import React from 'react'
import Item from './Item'

function ItemList({ items }) {
    return (
      <div className="item-list">
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            pictureUrl={item.pictureUrl}
          />
        ))}
      </div>
    );
  }


export default ItemList