import React from 'react'
import { Link } from 'react-router-dom';
import "./Menu2.css";
export const Menu2 = () => {
  return (
    <nav   className='nav-menu'>




<li>
    <Link  to="/">HOME</Link>
</li>
<li>
    <Link to="/about-you">ABOUT YOU</Link>
</li>
<li>
    <Link to="/check">CHECK THIS</Link>
</li>



    </nav>
  )
}
