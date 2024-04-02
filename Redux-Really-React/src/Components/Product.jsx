import React from 'react'

import { addToCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';


export const Product = ({product}) => {
 
 const {name,id}=product;
 const distpatch=useDispatch();

 
    return (
    <div  className='producto'>

<h2>{name}  </h2>

<button  onClick={()=> distpatch(addToCart(id))}>Agregar</button>


    </div>
  )
}
