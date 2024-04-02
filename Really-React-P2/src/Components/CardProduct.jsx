import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import "./CardProduct.css"
 const CardProduct = ({productos}) => {
    let {id,title, price, image}=productos;
  return (
  <article className='producto-a'>
<Link to={`/producto/${id}`}>
<img src={image} alt="" />

<div>
  <p>{title}</p>
<h4>${price}</h4>
</div>


</Link>
  </article>
  )
}

export {CardProduct}
