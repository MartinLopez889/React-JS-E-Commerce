import React from 'react'
import {BsCartPlus} from 'react-icons/bs'

const CartWidget = () => {
  return (
    <>
      <BsCartPlus/> 
      <span>
        En el carrito: <span className= "bg-danger border border-black border-2 rounded ">2</span>
      </span>
    </>
  )
}

export default CartWidget