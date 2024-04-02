import React from 'react'
import { Outlet,Link } from 'react-router-dom'

export const Servicios = () => {
  return (
    <div>


<h2>SERVICIOS</h2>

<nav  className='menu'>
<Link to="/servicios">INICIO</Link>
<Link to="/servicios/lista">Lista</Link>
<Link to="/servicios/garantia">Grarantia</Link>
<Link to="/servicios/politicas">Politicas</Link>




</nav>
<Outlet/>

    </div>
  )
}
