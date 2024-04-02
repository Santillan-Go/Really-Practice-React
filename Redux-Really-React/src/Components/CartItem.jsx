import React from 'react'

import {deleteToCart,deleteOne } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';


export const CartItem = ({product}) => {
 
 const {name,id,quantity}=product;
 const distpatch=useDispatch();

 
    return (
    <div  className='producto'>

<h2>{name}  </h2>
{quantity}
<button  onClick={()=> distpatch(deleteToCart(id))}>delete</button>
<button  onClick={()=> distpatch(deleteOne(id))}>delete 1</button>

    </div>
  )
}
