
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Header } from '../Components/Header'
import { Home } from './Home'
import { useContext, useEffect } from 'react'
import SittingContext from '../context/sittingContext'
import LogInContext from '../context/LogInContext'

export const Layout = () => {
  const {sitting ,setSitting, setChange}=useContext(SittingContext);
const navigate=useNavigate();

  const logOut=()=>{
   
    localStorage.removeItem("user");
    navigate("log")
  }
  return (
    <>



<Header />

<div  className={`panel-sitting ${sitting?"show-panel":""}`}>

<button onClick={logOut}>Cerrar sesión</button>


<button>🌛 </button>
</div>

<main onClick={()=>setSitting(false)}>


<Outlet/>
</main>




    </>
  )
}
