import React from 'react'
import { Link } from 'react-router-dom'

export const ServiciosLista = ({servicios}) => {
  return (
    <div>



        
<h2>ServiciosLista</h2>

<ul>


{servicios.map(se=> <Link key={se.id} to={`/servicios/${se.id}`}>{se.name}</Link>)}
</ul>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis iusto et consequatur sed rerum sequi illum itaque, soluta id. Perferendis ipsa nihil ipsum dolorum sed magni enim ab delectus?</p>

        
    </div>
  )
}
