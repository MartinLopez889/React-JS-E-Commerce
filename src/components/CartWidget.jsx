import React from 'react'
import {BsCartPlus} from 'react-icons/bs'

const CartWidget = () => {
  return (
    <BsCartPlus/>, 
    <div>
        En el carrito: <span className= "bg-danger border border-black border-2 rounded ">2</span>
    </div>
  )
}

export default CartWidget