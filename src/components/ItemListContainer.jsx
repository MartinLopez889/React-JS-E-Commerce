import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = (props) => {
  const { greeting, titulo } = props;
  const [items, setItems] = useState([])

  useEffect(() => {
    const data = async () => {
      setTimeout(() => {
        const mockData = [
          {
            id: 1,
            title: 'Goku',
            description: 'Figura Funko Pop - Dragon Ball',
            price: 10,
            pictureUrl: 'img1.jpg',
          },
          {
            id: 2,
            title: 'Vegetta',
            description: 'Figura Funko Pop - Dragon Ball',
            price: 10,
            pictureUrl: 'img2.jpg',
          },
          {
            id: 3,
            title: 'Gohan',
            description: 'Figura Funko Pop - Dragon Ball',
            price: 10,
            pictureUrl: 'img3.jpg',
          },
          {
            id: 4,
            title: 'Trunks',
            description: 'Figura Funko Pop - Dragon Ball',
            price: 10,
            pictureUrl: 'img4.jpg',
          }
        ];
        setItems(mockData);
      }, 2000);
    };

    data();
  }, []);



  return (
    <div className="bg-info">
      <p className="fs-1 fw-bold">{greeting}</p>
      <p className="fs-2 fst-italic">{titulo}</p>
      <ItemList items={items} />
      <ItemCount stock={5} onAdd={(cantidad) => console.log(`Agregado al carrito: ${cantidad}`)} />

    </div>
  )
}

export default ItemListContainer