import React from 'react'
import { Link } from 'react-router-dom'

export const MenuConceptos = () => {
  return (
    <nav>
      {/* <span>USANDO LINKS NO => A</span> */}

      <li>

<span>USANDO LINK, NO =A</span>
<Link  to="/">HOME</Link>

<Link  to="/about">ABOUT</Link>

<Link  to="/contact">CONTACT</Link>


      </li>

{/* <span>PARAMETROS</span> */}
<li>
<span>USO DE PARAMETROS</span>
<Link to={"/usuario/carlos"}>Carlos</Link>
<Link to={"/usuario/juan"}>Juan</Link>


</li>


<li>



  <span>USANDO VARIABLES</span>

<Link  to={"/productos"}>PRODUCTOS</Link>
</li>





    </nav>
  )
}
