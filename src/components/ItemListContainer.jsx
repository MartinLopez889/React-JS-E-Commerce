import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getData } from './mock/data'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const {categoryId}=useParams()
  console.log(categoryId)
  useEffect(() => {
    setLoading(true)
    getData()
      .then((data) => {
        if(categoryId){
          setItems(data.filter(prod=>prod.category === categoryId));
        }else{
        setItems(data);
      }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(()=> setLoading(false))
  }, [categoryId]);

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
    </div>
  )
}


export default ItemListContainer