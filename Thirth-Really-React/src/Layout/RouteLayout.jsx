import React from 'react'
import  {NavLink, Outlet}  from "react-router-dom"
export const RouteLayout = () => {
  return (
    <div   className='root-layout'>


<header>

 <nav>

 <NavLink  to={"/"}>HOME</NavLink>
  <NavLink  to={"about"}>ABOUT</NavLink>
  <NavLink  to={"help"}>HELP</NavLink>

 </nav>

 </header>


 <main>
{/* THIS OUTLET RENDER EL CONTENIDO DEL LINK=> /=> /ABOUT 

BASICAMENTE PEGAR 
*/}
    {<Outlet/>}
 </main>

    </div>
  )
}
