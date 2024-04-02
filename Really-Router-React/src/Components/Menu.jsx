import { Link,NavLink } from "react-router-dom"


export  function Menu(){

    


    return (

<>
<nav  className='menu'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        
        <Link to={"/acerca"}>Acerca</Link>
        <Link to={"/contactos"}>CONTACTOS</Link>
        <Link to={"/productos"}>PRODUCTOS</Link>
        <Link to={"/servicios"}>SERVICIOS</Link>
      
      
      <Link to={"/NotFound"}>ERROR 404</Link>
    
      </nav>


      <nav  className='menu'>
        <NavLink  className={({isActive})=>isActive?"active-link":null}  to={"/"}>HOME</NavLink>
        <NavLink className={({isActive})=>isActive?"active-link":null}  to={"/acerca"}>ACERCA</NavLink>
        <NavLink className={({isActive})=>isActive?"active-link":null}  to={"/contactos"}>CONTACTOS</NavLink>
      </nav>

</>

    )
}