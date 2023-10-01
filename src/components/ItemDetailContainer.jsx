import React, {useState, useEffect} from 'react'
import { getData } from './mock/data'

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData()
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(items)

}

export default ItemDetailContainer