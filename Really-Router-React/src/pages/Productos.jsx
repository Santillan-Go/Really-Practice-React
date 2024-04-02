import React from 'react'
import { Link } from 'react-router-dom'

export const Productos = ({productos}) => {


 
  return (
  <section>
<h1>PRODUCTOS</h1>

<ul  className='ul-link'>

    {productos.map(p=> 
    <Link  to={`/productos/${p.id}`}>{p.name}</Link>)}



</ul>


  </section>
  )
}
