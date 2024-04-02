import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark' >NavBar
    
    
    <div   className='conteiner'>


        <NavLink className="btn btn-outline-primary" to="/">Home</NavLink>
        <NavLink  className="btn btn-outline-primary"  to="about">About</NavLink>
        <NavLink  className="btn btn-outline-primary"  to="blog">Blog</NavLink>

    </div>
    
    
    </nav>
  )
}
