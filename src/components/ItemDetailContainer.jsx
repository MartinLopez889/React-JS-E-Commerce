import React, {useState, useEffect} from 'react'
import { getData } from './mock/data'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {id} = useParams();
  const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   getData()
  //     .then((data) => setItem(data.find((item)=> item.id === parseInt(id))))
  //     .catch((error) => console.log(error))
  //     .finally(()=> setLoader(false))
  // }, [id]);
  // console.log(item)


  useEffect(()=>{
    setLoader(true)
    const collectionProd = collection(db, 'Items')
    const referenciaAlDoc= doc(collectionProd, id)
    getDoc(referenciaAlDoc)
    .then((res)=> setItem({id:res.id, ...res.data()}))
    .catch((error)=>console.log(error))
    .finally(()=> setLoader(false))
  },[])

  return(
    <div className='bg-info fw-semibold'>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer