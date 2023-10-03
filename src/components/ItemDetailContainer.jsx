import React, {useState, useEffect} from 'react'
import { getData } from './mock/data'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    getData()
      .then((data) => setItem(data.find((item)=> item.title === 'Vegeta')))
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