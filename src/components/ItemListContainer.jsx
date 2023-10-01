import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { getData } from './mock/data'

const ItemListContainer = (props) => {


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData()
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const { greeting, titulo } = props;

  return (
    <div className="bg-info">
      <p className="fs-1 fw-bold">{greeting}</p>
      <p className="fs-2 fst-italic">{titulo}</p>
      <div>
        {loading ? (
          <p>Cargando productos...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (<ItemList items={items} />)}
      </div>
      <ItemCount stock={5} onAdd={(cantidad) => console.log(`Agregado al carrito: ${cantidad}`)} />
    </div>
  )
}


export default ItemListContainer