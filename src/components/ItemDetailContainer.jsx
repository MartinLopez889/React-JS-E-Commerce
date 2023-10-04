import React, {useState, useEffect} from 'react'
import { getData } from './mock/data'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {id} = useParams()

  useEffect(() => {
    getData()
      .then((data) => setItem(data.find((item)=> item.id === parseInt(id))))
      .catch((error) => console.log(error));
  }, []);
  console.log(item)


  return(
    <div>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer