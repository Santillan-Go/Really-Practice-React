import React, { useContext, useState } from 'react'
import CartContext from '../Context/CartContext'
import { CartItem } from '../Components/CartItem'

export const Cart = () => {


const {cart}=useContext(CartContext)
let style={paddingTop:"2rem"}
  return (
    <div  style={style}>


{cart.length>0&&cart.map(c=><CartItem key={c.id} data={c}/> )}



    </div>
  )
}
