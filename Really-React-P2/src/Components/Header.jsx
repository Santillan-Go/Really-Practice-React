import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Header.css"
import { FormCategory } from './FormCategory'
export const Header = () => {
  return (
  <header>

<Link to={"/"}>
<article  className='logo'>
    {/* <img src="src/assets/logo.png" alt="" /> */}
</article>
</Link>

{/* FORM */}
<FormCategory/>

<nav  className='nav-menu'>

<NavLink to="/">HOME</NavLink>

<NavLink to={"profile"}><img className='prof'   src="src/assets/prof.svg" alt="profil" /></NavLink>
<NavLink to={"cart"}><img  className='prof' src="src/assets/cart.svg" alt="cart" /></NavLink>


</nav>
  </header>
  )
}
